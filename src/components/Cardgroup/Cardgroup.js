import React from "react";
import Card from "../Card/Card";

const Cardgroup = () => {
  const students = [
    { name: "Zihad", live: "Bangabandhu Hall", id: 2 },
    { name: "Anas", live: "Ratul mess", id: 1 },
    { name: "Sagor", live: "Sheikh Rasel Hall", id: 3 },
    { name: "Faysal", live: "Zia Hall", id: 4 },
  ];
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {students.map((student) => (
          <Card key={student.id} value={student}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cardgroup;
