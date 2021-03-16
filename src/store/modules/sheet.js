import { nanoid } from 'nanoid';

const CREATE_SECTION = 'sheet/CREATE_SECTION';
const DELETE_SECTION = 'sheet/DELETE_SECTION';

const CREATE_ITEM = 'sheet/CREATE_ITEM';
const UPDATE_ITEM = 'sheet/UPDATE_ITEM';
const DELETE_ITEM = 'sheet/DELETE_ITEM';

export const createSection = sectionType => ({
  type: CREATE_SECTION,
  sectionType,
});
export const deleteSection = id => ({ type: DELETE_SECTION, id });

export const createItem = (id, payload) => ({
  type: CREATE_ITEM,
  id,
  payload,
});
export const updateItem = (sectionID, itemID, payload) => ({
  type: UPDATE_ITEM,
  sectionID,
  itemID,
  payload,
});
export const deleteItem = (sectionID, itemID) => ({
  type: DELETE_ITEM,
  sectionID,
  itemID,
});

const initialState = {
  sectionList: [
    {
      id: nanoid(),
      type: 'colorScheme',
      itemList: [
        { id: nanoid(), color: '#c1f1f3' },
        { id: nanoid(), color: '#E99B9B' },
        { id: nanoid(), color: '#9BDEE9' },
      ],
    },
    {
      id: nanoid(),
      type: 'typography',
      itemList: [
        {
          id: nanoid(),
          variant: 'h4',
          text: 'First world!',
          css: '{ background-color: "red"; }',
        },
      ],
    },
    {
      id: nanoid(),
      type: 'button',
      itemList: [
        { id: nanoid(), text: 'My btn', css: '{ background-color: "red"; }' },
      ],
    },
    {
      id: nanoid(),
      type: 'customElement',
      itemList: [
        {
          id: nanoid(),
          type: 'button',
          css: '{ background-color: "red"; }',
          inner: 'hello?',
        },
        { id: nanoid(), type: 'input', css: '{ margin-left: 10px; }' },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SECTION:
      return {
        ...state,
        sectionList: [
          ...state.sectionList,
          generateSection(action.sectionType),
        ],
      };

    case DELETE_SECTION:
      return {
        ...state,
        sectionList: state.sectionList.filter(
          section => section.id !== action.id
        ),
      };

    case CREATE_ITEM:
      return {
        ...state,
        sectionList: generateItem(state.sectionList, action.id, action.payload),
      };

    case UPDATE_ITEM:
      return {
        ...state,
        sectionList: patchItem(
          state.sectionList,
          action.sectionID,
          action.itemID,
          action.payload
        ),
      };

    case DELETE_ITEM:
      return {
        ...state,
        sectionList: removeItem(
          state.sectionList,
          action.sectionID,
          action.itemID
        ),
      };

    default:
      return state;
  }
};

export default reducer;

const generateSection = type => {
  switch (type) {
    case 'colorScheme':
      return {
        id: nanoid(),
        type,
        contents: [{ id: nanoid(), color: '#c1f1f3' }],
      };

    case 'typography':
      return {
        id: nanoid(),
        type,
        contents: [
          {
            id: nanoid(),
            variant: 'h2',
            text: 'Example Typography',
            css: '{ color: "tomato"; }',
          },
        ],
      };

    case 'button':
      return {
        id: nanoid(),
        type,
        contents: [
          {
            id: nanoid(),
            text: 'Example Button',
            css: '{ color: "skyblue"; }',
          },
        ],
      };

    case 'customElement':
      return {
        id: nanoid(),
        type,
        contents: [{ type: 'input', css: '{ margin-left: 10px; }' }],
      };

    default:
      throw new Error();
  }
};

const generateItem = (sectionList, id, payload) =>
  sectionList.map(section => {
    if (section.id !== id) return section;
    switch (section.type) {
      case 'colorScheme':
        return {
          ...section,
          itemList: [
            ...section.itemList,
            { id: nanoid(), color: payload.color },
          ],
        };

      case 'typography':
        return {
          ...section,
          itemList: [
            ...section.itemList,
            {
              id: nanoid(),
              variant: payload.variant,
              text: payload.text,
              css: payload.css,
            },
          ],
        };

      case 'button':
        return {
          ...section,
          itemList: [
            ...section.itemList,
            {
              id: nanoid(),
              text: payload.text,
              css: payload.css,
            },
          ],
        };

      case 'customElement':
        return {
          ...section,
          itemList: [
            ...section.itemList,
            {
              id: nanoid(),
              type: payload.type,
              css: payload.css,
            },
          ],
        };

      default:
        return section;
    }
  });

const patchItem = (sectionList, sectionID, itemID, payload) =>
  sectionList.map(section => {
    if (section.id !== sectionID) return section;

    const newItemList = section.itemList.map(item => {
      if (item.id !== itemID) return item;
      switch (section.type) {
        case 'colorScheme':
          return {
            ...item,
            color: payload.color,
          };

        case 'typography':
          return {
            ...item,
            variant: payload.variant,
            text: payload.text,
            css: payload.css,
          };

        case 'button':
          return { ...item, text: payload.text, css: payload.css };

        case 'customElement':
          return {
            ...item,
            type: payload.type,
            css: payload.css,
          };

        default:
          return item;
      }
    });

    return { ...section, itemList: newItemList };
  });

const removeItem = (sectionList, sectionID, itemID) =>
  sectionList.map(section => {
    if (section.id !== sectionID) return section;
    return {
      ...section,
      itemList: section.itemList.filter(item => item.id !== itemID),
    };
  });
