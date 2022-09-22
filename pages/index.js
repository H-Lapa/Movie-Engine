import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div id={styles.searchSection}>
      <TextField id="standard-basic" variant="standard" />
      <Button variant="contained">Contained</Button>
    </div>

  )
}


