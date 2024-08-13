import { useState } from 'react'
import './App.css'
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';

export default function App() {
  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
}


