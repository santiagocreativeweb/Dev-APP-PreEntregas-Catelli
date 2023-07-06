import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "../Components/TopBar";
import TaskList from "../Components/TaskList";
import ModalTask from "../Components/Modal";

const MainScreen = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({});

  const onAddTask = () => {
    console.log("Se agregó una tarea");
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      },
    ]);
  };

  const clean = () => {
    console.log("Se limpió la lista");
    setList([]);
  };

  const borrarTask = () => {
    setList((prevList) =>
      prevList.filter((task) => task.id !== taskActive.id)
    );
    setModalVisible(false);
  };
  

  const onPressTask = (task) => {
    console.log(task);
    setTaskActive(task);
    setModalVisible(!modalVisible);
  };

  const onPressStatus = (status) => {
    console.log("Se presiono en onPressDone");
    //Definir la lógica para actualizar el estado de la tarea
    const remainTask = list.filter(taskList => taskList.id !== taskActive.id)
    const orderedList = [
        ...remainTask,
        {
            ...taskActive,
            completed: status
        }
    ]
    .sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    console.log(taskActive)
    setList(orderedList)
    setModalVisible(!modalVisible)
}

const onPressBorrar = () => {
  const updatedList = list.filter((task) => task.id !== taskActive.id);
  setList(updatedList);
  setModalVisible(false);
};


  return (
    <View style={styles.container}>
      <TopBar
        input={input}
        setInput={setInput}
        onAddTask={onAddTask}
        clean={clean}
        borrarTask={borrarTask}
      />
      <TaskList list={list} onPressTask={onPressTask} />
      <ModalTask
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          taskActive={taskActive}
          onPressStatus={onPressStatus}
          onPressBorrar={onPressBorrar}
        />

    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
