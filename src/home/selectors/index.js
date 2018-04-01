import { createSelector } from 'reselect';
import moment from 'moment';
import { filter, forEach, groupBy, map, pipe, prop, sortBy, values } from 'ramda';

export default createSelector(
  chats => chats.messages,
  (messages) => {
    const today = moment();
    const date = today.date();
    const ts = +today.date(date - 7).startOf('day').format('x');

    const groupedByDate = pipe(
      filter(msg => msg.time >= ts),
      map(msg => ({
        ...msg,
        date: moment(msg.time).format('MMMM Do, YYYY')
      })),
      groupBy(prop('date')),
      values,
      map(group => ({
        date: group[0].date,
        messages: group
      })),
      sortBy(group => group.messages[0].time)
    )(messages);

    forEach(
      group => {
        const messages = sortBy(prop('time'), group.messages);
        let msgs = [];
        let groupMsgs = [];
        let lastMsg = {};
        forEach(msg => {
          const startGroup = (msg.time - lastMsg.time) > 60000 || lastMsg.name !== msg.name;

          if (startGroup) {
            if (msgs.length > 0) {
              msgs[msgs.length - 1].msgs = groupMsgs;
              groupMsgs = [];
            }

            msgs.push(msg);
            msg.formattedTime = moment(msg.time).format('h:mm A')
            groupMsgs.push(msg.text);
          } else {
            groupMsgs.push(msg.text);
          }

          lastMsg = msg;
        })(messages);

        if (groupMsgs.length > 0) {
          msgs[msgs.length - 1].msgs = groupMsgs;
        }
        group.messages = msgs;
      },
      groupedByDate
    );

    return groupedByDate;
  }
)

