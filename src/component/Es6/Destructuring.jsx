import React from 'react'

export default function Destructuring() {
    const a = [1,2,3,4];
    // a[2];

    const [z, b,c,d] = a;

    const students ={
        name:"abc",
        phone:"8979878378",
        place:"mangalore"
    }

    const { name ,phone,place} =students


    const college =[{
        name:"abc",phone:778677677,place:"mangalore"
    },
{
        name:"john",phone:778677677,place:"udupi"
    },{
        name:"abc",phone:778677677,place:"mangalore"
    }]

    const [student1,student2,student3] =college;

  return (
    <div>
      {c}

      {name}

      {student2.name}
      {student1.place}

    </div>
  )
}
