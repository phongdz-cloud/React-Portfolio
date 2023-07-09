import React, { useState } from "react";

interface IUser {
  name: string | undefined;
  age: number | string;
  city: string;
}

interface IProps {
  defaultName?: string;
  defaultAge?: number | string;
}

const Video10 = ({ defaultName, defaultAge = "" }: IProps) => {
  //todo: gắn default value, đồng thời định nghĩa props cho component
  const [name, setName] = useState<string | undefined>(defaultName);
  const [age, setAge] = useState<number | string>(defaultAge);
  const [city, setCity] = useState<string[]>([
    "Hà Nội",
    "Đà Nẵng",
    "Hồ Chí Minh",
  ]);

  const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");

  const [users, setUsers] = useState<IUser[]>([]);

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    const user = {
      name,
      age,
      city: selectedCity,
    };
    setUsers([...users, user]); // spread syntax
    setName("");
    setAge("");
  };

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <div>Example video 10: hello world </div>
      <div className="form-user">
        <div>
          <label>Name:</label>
          <br />
          <input type="text" value={name} onChange={handleOnChangeName} />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input
            type="text"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />
          <select onChange={(event) => setSelectedCity(event.target.value)}>
            {city.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <input type="submit" value="submit" onClick={handleSubmit} />
      </div>
      <hr />
      <div>List Users:</div>
      <div className="table-user">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Video10;
