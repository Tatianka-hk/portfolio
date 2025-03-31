"use client"
import React, { useState } from 'react';
import { randomRotation } from '../../utils';
import { projects } from '../../static';
import { Thread, NewspaperPart, GithubSticker, ProjectSticker, ToolSticker } from '../../ui';


const DetectiveBoard = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-custom-bg bg-cover bg-center flex justify-center items-center">
      <div className="bg-detective-board-bg w-[70%] h-[95%] bg-center bg-cover ">

        <div
          className="flex fixed top-1/2 left-1/2
                    bg-white p-1 shadow-lg z-10"
        // style={{ transform: `translate(-50%, -50%) rotate(${randomRotation()}deg)` }}
        >
          <div className="border border-gray-400 p-3 fixed top-1/2 left-1/2">
            <div className="bg-yellow-100 p-2">
              <div className="text-xl font-bold text-center text-gray-800">Tetiana Gurkivska</div>
              <div className="text-xs text-center mt-1 border-t border-gray-400 pt-1">
                Fullstack developer(Vue/React + Node.js/Python)
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -left-1">
            <div className="w-6 h-6 bg-red-500 rounded-full shadow"></div>
          </div>
        </div>

        {projects.map((project) => {
          const x = project.x, y = project.y;

          return (
            <React.Fragment key={project.id}>

              <ProjectSticker id={project.id} x={x} y={y} name={project.name} />

              <Thread xOffset={-5} yOffset={-10} x={x} y={y} />
              <ToolSticker x={x} y={y} tools={project.tools} />

              <Thread xOffset={-4} yOffset={6} x={x} y={y} />
              <GithubSticker x={x} y={y} github={project.github} />

              <Thread xOffset={1} yOffset={-15} x={x} y={y} />
              <NewspaperPart x={x} y={y} description={project.description} />

              <Thread xOffset={-x + 1} yOffset={-y - 1} x={x} y={y} />
              {/* Нитка до опису */}

            </React.Fragment>
          );
        })}

        {/* Додаткові елементи для детективного вигляду */}
        <div
          className="fixed bg-green-300 p-2 shadow-md z-10"
          style={{
            top: '20%',
            left: '20%',
            transform: `rotate(${randomRotation()}deg)`,
            width: '120px'
          }}
        >
          <div className="text-lg font-bold text-center">ДОКАЗИ?</div>
          <div className="absolute -top-3 -left-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full shadow"></div>
          </div>
        </div>

        <div
          className="fixed bg-yellow-200 p-2 shadow-md z-10"
          style={{
            top: '25%',
            right: '15%',
            transform: `rotate(${randomRotation()}deg)`,
            width: '120px'
          }}
        >
          <div className="text-sm font-bold">ПОЄДНАТИ?</div>
          <div className="absolute -top-3 -left-3">
            <div className="w-6 h-6 bg-red-500 rounded-full shadow"></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DetectiveBoard;