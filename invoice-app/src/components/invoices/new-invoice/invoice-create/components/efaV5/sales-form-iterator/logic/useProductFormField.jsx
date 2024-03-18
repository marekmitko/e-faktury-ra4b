import {
  useState,
  useContext,
  useCallback,
  useRef,
  Children,
  isValidElement,
} from "react";
import {
  useArrayInput,
  Confirm,
  useRecordContext,
  SimpleFormIteratorContext,
  useTranslate,
  FormDataConsumer,
} from "react-admin";
import get from "lodash/get";

// in ra-core/form/getDefaultValues.js
const getDefaultValues = (data = {}, defaultValue = {}, defaultValues = {}) => {
  const globalDefaultValue =
    typeof defaultValue === "function" ? defaultValue() : defaultValue;
  return { ...globalDefaultValue, ...defaultValues, ...data };
};

export default function useProductFormIterator(props) {
  const { children, source } = { ...props };
  const translate = useTranslate();
  const initialDefaultValue = useRef({});

  const { append, fields, move, remove, replace } = useArrayInput(props);

  const record = useRecordContext(props);
  const records = get(record, source);
  const removeField = useCallback(
    (index) => {
      remove(index);
    },
    [remove]
  );

  if (fields.length > 0) {
    const { id, ...rest } = fields[0];
    initialDefaultValue.current = rest;
    for (const k in initialDefaultValue.current) // k is key property
      initialDefaultValue.current[k] = "";
  }

  const addField = useCallback(
    (item = undefined) => {
      let defaultValue = item;
      if (item == null) {
        defaultValue = initialDefaultValue.current;
        if (
          Children.count(children) === 1 &&
          isValidElement(Children.only(children)) &&
          // @ts-ignore
          !Children.only(children).source
        ) {
          // ArrayInput used for an array of scalar values
          // (e.g. tags: ['foo', 'bar'])
          defaultValue = "";
        } else {
          // ArrayInput used for an array of objects
          // (e.g. authors: [{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])
          defaultValue = defaultValue || {};
          Children.forEach(children, (input) => {
            if (
              isValidElement(input) &&
              input.type !== FormDataConsumer &&
              input.source
            ) {
              defaultValue[input.source] = input.props.defaultValue ?? "";
            }
          });
        }
      }
      //   append(defaultValue);
      //*edu Do korekty
      append({
        product_name: "",
        product_count: 1,
        product_price_brutto: null,
        product_price_netto: null,
        product_vat: null,
        product_type: "",
      });
    },
    [append, children]
  );
  return {
    record,
    records,
    fields,
    translate,
    removeField,
    addField,
    move,
    replace,
  };
}

//   https://medium.com/reactbrasil/pure-components-interfaces-and-logic-hooks-84c9ae4d8805
//   import { useState, useContext } from 'react';
// import { useDispatch, StoreContext } from 'redux-react-hook';

// export default function useTodo() {
//   const [newTodo, setNewTodo] = useState('');

//   const store = useContext(StoreContext);
//   const todos = store.getState();

//   const dispatch = useDispatch();

//   function addTodo() {
//     dispatch({ type: 'ADD_TODO', text: newTodo });
//     setNewTodo('');
//   }

//   return { todos, newTodo, setNewTodo, addTodo };
// }
