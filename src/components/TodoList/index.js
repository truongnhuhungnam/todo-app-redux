import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainningSelector } from "../../redux/selectors";
import todosSlice from "./todosSlice";

export default function TodoList() {
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const todoList = useSelector(todosRemainningSelector);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    const handleAddButtonClick = () => {
        dispatch(
            todosSlice.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );
        setTodoName();
        setPriority("Medium");
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {todoList.map((item) => (
                    <Todo
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        priority={item.priority}
                        completed={item.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select
                        defaultValue="Medium"
                        value={priority}
                        onChange={handlePriorityChange}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button
                        type="primary"
                        onClick={() => handleAddButtonClick()}
                    >
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
