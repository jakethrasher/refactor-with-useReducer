export const initialState = {
  before:[],
  current:'#FF0000',
  after: [],
};
export function reducer({ before, current, after }, action){
  switch(action.type){
    case 'UNDO':
      return {
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1)
      };
    case 'REDO':
      return {
        after:after.slice(1),
        current: after[0],
        before: [...before, current]
      };
    case 'RECORD':
      return {
        before: [...before, current],
        current: action.val,
        after,
      };
    default:
      return { initialState };
  }
}
