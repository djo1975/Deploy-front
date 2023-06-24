import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getPallete from '../helpers/pallete';
import { useNavigate } from 'react-router-dom';

function Vespa({ icon: url, name, description ,id }) {
  const navigate = useNavigate();
  const [pallete, setPallete] = useState();
  const token = useSelector((state) => state.persistedReducer.token); // Pridruživanje tokena iz Redux-a

  useEffect(() => {
    const vibrant = getPallete(url);
    vibrant.then((pallete) => setPallete(pallete));
  }, []);

  const myShade = pallete?.LightVibrant.getHex();

  const handleVespaClicked = () => {
  navigate('/details' , {state: {url, name, id}});
  };


  return (
    <div className=" h-96 w-80  my-2 items-center px-10 flex flex-col mx-4 justify-between hover:outline-dotted hover:cursor-pointer hover:outline-emerald-300 rounded-3xl" onClick={handleVespaClicked}>
      <div
        className=" relative p-2 w-60 mt-8 h-60 flex items-center rounded-full"
        style={{ backgroundColor: myShade }}
      >
        <img
          src={url}
          alt=""
          className="rounded-full absolute top-2/4 right-2/4 translate-x-1/2 -translate-y-1/2 h-52 w-52 "
        />
      </div>

      <div>
        <h3 className="font-bold text-xl">{name}</h3>
        <p>...................</p>
        <p>{description}</p>
      </div>

      <div className="flex">
        <svg
          className="h-6 w-6 text-slate-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />
          {' '}
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>

        <svg
          className="h-6 w-6 text-slate-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />
          {' '}
          <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
        </svg>

        <svg
          className="h-6 w-6 text-slate-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />
          {' '}
          <rect x="4" y="4" width="16" height="16" rx="4" />
          {' '}
          <circle cx="12" cy="12" r="3" />
          {' '}
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      </div>
    </div>
  );
}

export default Vespa;
