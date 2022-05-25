import React, {useEffect, useState} from 'react';
import './App.css';
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableCell from "./components/TableCell";
import Modal from "./components/Modal/Modal";

interface User{
    id: number;
    name: string;
    surname: string;
    age: number;
}

function App() {
    const [selectedItem, setSelectedItem] = useState(0);
    const [data, setData] = useState<User[]>([]);

    const [modalOpen, setOpen] = useState(false);

    useEffect(() => {
        setData([
            {id: 1, name: "Mirel", surname: "Bajrić", age: 18},
            {id: 2, name: "Samir", surname: "Suljanović", age: 50},
            {id: 3, name: "Aid", surname: "Topalović", age: 18}
        ])
    }, [])

  return (
    <div className="App">
        <Table>
          <TableHead>
              <TableRow>
                  <TableCell align={"center"}>Select</TableCell>
                  <TableCell align={"center"}>Name</TableCell>
                  <TableCell align={"center"}>Surname</TableCell>
                  <TableCell align={"center"}>Age</TableCell>
                  <TableCell align={"center"}>Button</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {
                  data.map((person) => {
                      return(
                          <TableRow selected={selectedItem === person.id}>
                              <TableCell align={"center"}>
                                  <input
                                      type={"checkbox"}
                                      checked={selectedItem === person.id}
                                      onChange={(e) => {
                                          if(e.target.checked){
                                              setSelectedItem(person.id);
                                          }
                                          else {
                                              setSelectedItem(0);
                                          }
                                      }}
                                  />
                              </TableCell>
                              <TableCell>{person.name}</TableCell>
                              <TableCell>{person.surname}</TableCell>
                              <TableCell align={"right"}>{person.age}</TableCell>
                              <TableCell align={"center"}>
                                  <button onClick={() => {
                                      setData(data.filter((item) => {
                                          return item.id !== person.id;
                                      }))
                                  }}>DELETE</button>
                              </TableCell>
                          </TableRow>
                      )
                  })
              }

          </TableBody>
      </Table>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, amet consequatur culpa, debitis deleniti distinctio eaque earum error hic impedit maiores molestiae quas repellendus sapiente sed, soluta suscipit vitae!</p>
        <button onClick={() => setOpen(!modalOpen)}>OPEN</button>
        <Modal open={modalOpen} actionLeft={() => console.log("LEFT")} actionRight={() => console.log("RIGHT")}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos error quisquam quod tenetur voluptates?
                A animi ducimus est non nostrum officia saepe vel! A, assumenda dolore ipsam optio tempore veritatis.</p>
        </Modal>
    </div>
  );
}

export default App;
