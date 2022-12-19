import React, { useState, useMemo, createContext, useContext } from 'react';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { AsyncStorageKeys, getItem, setItem } from '../common/async-storage';
import { TaskDataProps } from '../types';

export interface TaskContextInterface {
  activeData: TaskDataProps[];
  addData: Function;
  setDeleteData: Function;
  setFinishData: Function;
  setSearchData: Function;
  priorityData: TaskDataProps[];
  deletedData: TaskDataProps[];
  finishedData: TaskDataProps[];
  searchResult: TaskDataProps[];
}

export const TaskContext = createContext<TaskContextInterface>({
  activeData: [],
  addData: () => {},
  setDeleteData: () => {},
  setFinishData: () => {},
  setSearchData: () => {},
  deletedData: [],
  finishedData: [],
  priorityData: [],
  searchResult: [],
});

export const TaskProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const currentData =  JSON.parse(getItem(AsyncStorageKeys.TODOSDATA) as string)
  const [listData, setListData] = useState<TaskDataProps[]>(
    currentData ? currentData:[]
  );


  const activeData = useMemo(() => {
    const tempData = [...listData];
    const result = tempData.filter(
      item => item.isDone === false && item.isDeleted === false,
    );
    return result;
  }, [listData]);

  const priorityData = useMemo(() => {
    const result = listData.filter(
      item =>
        item.priority === 2 &&
        item.isDone === false &&
        item.isDeleted === false,
    );
    return result;
  }, [listData]);

  const deletedData = useMemo(() => {
    const result = listData.filter(item => item.isDeleted === true);
    return result;
  }, [listData]);

  const finishedData = useMemo(() => {
    const result = listData.filter(item => item.isDone === true);
    return result;
  }, [listData]);

  const addData = (props: TaskDataProps) => {
    // AsyncStorage.clear()
    const {
      id,
      title,
      detail,
      priority,
      category,
      isDone,
      isDeleted,
      createdAt,
      startTime,
      endTime,
      taskDate,
    } = props;
    const currentData = getItem(AsyncStorageKeys.TODOSDATA) as string;

    if (currentData === null) {
      const data = [
        {
          id,
          title,
          detail,
          priority,
          category,
          isDone,
          isDeleted,
          createdAt,
          startTime,
          endTime,
          taskDate,
        },
      ];
      setListData(data);
      setItem(AsyncStorageKeys.TODOSDATA, JSON.stringify(data));
    } else {
      let dataToStore = [...JSON.parse(currentData)];
      dataToStore.push({
        id,
        title,
        detail,
        priority,
        category,
        isDone,
        isDeleted,
        createdAt,
        startTime,
        endTime,
        taskDate,
      });
      setListData(dataToStore);
      setItem(AsyncStorageKeys.TODOSDATA, JSON.stringify(dataToStore));
    }

    Toast.show({
      type: 'success',
      text1: 'Your task created',
      // text2: 'Some thing went wrong, Please try again',
    });
  };

  const setDeleteData = (id: string) => {
    const tempData = [...listData];
    const objIndex = tempData.findIndex(obj => obj.id === id);
    tempData[objIndex].isDeleted = true;
    setListData(tempData);
    setItem(AsyncStorageKeys.TODOSDATA, JSON.stringify(tempData));
  };

  const setFinishData = (id: string) => {
    const tempData = [...listData];
    const objIndex = tempData.findIndex(obj => obj.id === id);
    tempData[objIndex].isDone = true;
    setListData(tempData);
    setItem(AsyncStorageKeys.TODOSDATA, JSON.stringify(tempData));
  };

  const searchData = (id: string) => {};

  //  useEffect(() => {
  //   const storedData =  as TaskDataProps[] ||null
  //  }, []);

  return (
    <TaskContext.Provider
      value={{
        activeData,
        priorityData,
        addData,
        setDeleteData,
        setFinishData,
        deletedData,
        searchData,
        finishedData,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useDataTask = () => {
  const {
    activeData,
    priorityData,
    addData,
    setDeleteData,
    setFinishData,
    deletedData,
    searchData,
    finishedData,
  } = useContext(TaskContext);

  return {
    activeData,
    priorityData,
    addData,
    setDeleteData,
    setFinishData,
    searchData,
    finishedData,
    deletedData,
  };
};
