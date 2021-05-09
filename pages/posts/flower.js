import React from 'react'

export default function FirstPost() {
  return (
    <div className="flower">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <div key={i} className={`petal${i}`} />
      ))}
      <style jsx>
        {`
          .flower {
            width: 100vw;
            height: 100vh;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
          }
          .flower div {
            height: 300px;
            width: 300px;
            background: blue;
            border-radius: 300px 0;
            position: absolute;
            bottom: 200px;
            left: 50%;
            opacity: 0.6;
            transform-origin: 0 300px;
            transform: rotate(-45deg);
            transition: all 8s;
          }
          .flower:hover .petal1{
            transform:rotate(-23deg);
          } 
          .flower:hover .petal2{
            transform:rotate(5deg);
          }
          .flower:hover .petal3{
            transform:rotate(-68deg);
          }
          .flower:hover .petal4{
            transform:rotate(-95deg);
          } 
          .flower:hover .petal5{
            transform:rotate(30deg);
          } 
          .flower:hover .petal6{
            transform:rotate(-120deg);
          }  
          .flower:hover .petal7{
            transform:rotate(50deg);
          }
          .flower:hover .petal8{
            transform:rotate(-140deg);
          }
        `}
      </style>
    </div>
  )
}
