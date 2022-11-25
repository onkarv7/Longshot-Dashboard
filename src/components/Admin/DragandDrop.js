import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DragandDrop = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      lastName: "Snow",
      Keyword: "shopping in barcelona",
      age: 35,
      Volume: 480,
      KD: 46,
      CPC: 0.24,
      COM: 0.12,
      Result: "313M",
    },
    {
      id: 2,

      Keyword: "how to open weed shop in barcelona",

      Volume: 320,
      KD: 12,
      CPC: 0,
      COM: 0,
      Result: "480M",
    },
    {
      id: 3,
      lastName: "Lannister",
      Keyword: "best shopping in barcelona",
      Volume: 260,
      KD: 44,
      CPC: 0,
      COM: 0.05,
      Result: "314M",
    },
    {
      id: 4,
      lastName: "Stark",
      Keyword: " shopping in barcelona spain",
      Volume: 140,
      KD: 44,
      CPC: 0.47,
      COM: 0.06,
      Result: "879M",
    },
    {
      id: 5,
      lastName: "Targaryen",
      Keyword: "best coffe shop in barcelona",
      Volume: 90,
      KD: 26,
      CPC: 0,
      COM: 0.1,
      Result: "221M",
    },
    {
      id: 6,
      lastName: "Melisandre",
      Keyword: "laxuary shopping in barcelona",
      Volume: 70,
      KD: 24,
      CPC: 0,
      COM: 0.2,
      Result: "198M",
    },
    {
      id: 7,
      lastName: "Clifford",
      Keyword: "tatto shopsin barcelona spain",
      Volume: 70,
      KD: 23,
      CPC: 0,
      COM: 0.04,
      Result: "438M",
    },
    {
      id: 8,
      lastName: "Frances",
      Keyword: "where to shop in barcelona",
      Volume: 70,
      KD: 36,
      CPC: 0,
      COM: 0.2,
      Result: "250M",
    },
  ]);

  let todoItemDrag = useRef();
  let todoItemDragOver = useRef();

  function D_Start(e, index) {
    todoItemDrag.current = index;
  }
  function D_Enter(e, index) {
    todoItemDragOver.current = index;

    const cpArr = [...todos];

    let finalArr = [];

    cpArr.forEach((item) => {
      finalArr.push({
        Keyword: item.Keyword,
      
      });
    });

    setTodos(finalArr);
  }
  function D_End(e, index) {
    const arr1 = [...todos];

    const todo_item_main = arr1[todoItemDrag.current];
    arr1.splice(todoItemDrag.current, 1);
    arr1.splice(todoItemDragOver.current, 0, todo_item_main);

    todoItemDrag.current = null;
    todoItemDragOver.current = null;

    let f_arr = [];

    arr1.forEach((item) => {
      f_arr.push({
        Keyword: item.Keyword,
      });
    });

    setTodos(f_arr);
  }

  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, duration: 4 }}
      whileDrag={{ backgroundColor: "red" }}
    >
      {" "}
      <Box
        className="box"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
          width: "100%",
          marginTop: "6rem",
        }}
      >
    
        <h1>my list</h1>
        <Stack className="list" spacing={2}>
          {todos.map((todo, index) => (
            <React.Fragment>
              <h3
                className="myList"
                draggable
                droppable
                onDragStart={(e) => D_Start(e, index)}
                onDragEnter={(e) => D_Enter(e, index)}
                onDragEnd={(e) => D_End(e, index)}
              >
                <Stack spacing={2} className="form">
                  {" "}
                  {todo.Keyword}
                </Stack>
              </h3>
            </React.Fragment>
          ))}
        </Stack>
      </Box>
      <motion.button
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 4 }}
        className="link"
      >
        <Link to="/"> Back to Dashboard</Link>
      </motion.button>
    </motion.div>
  );
};

export default DragandDrop;
