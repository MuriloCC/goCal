import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Routes } from './src/routes';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
