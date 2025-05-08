import React, { useState, useEffect } from 'react'
import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ShowPro() {

  const [media, setMedia] = useState('');
  const { poster_id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getMediaById = async () => {
      try {
        const res = await axios.get(`https://n8n-bb7z.onrender.com/webhook/e3851d33-6719-44be-8951-6912b6db2e98/seven-pro/media/${poster_id}`);
        setMedia(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMediaById();
  }, [poster_id]);

  return (
    <>
      <Box sx={container}>
        <Button sx={{ fontSize: '1.25rem', bgcolor: 'green', color: 'white', mt: '2rem' }} onClick={() => { navigate('/') }}>กลับสู่หน้าหลัก</Button>
        <Grid container spacing={5} sx={{ width: '100%', border: '2px solid green', borderRadius: '25px', p: '2rem', overflow: 'hidden', my: '2rem' }}>
          <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar
              variant='square'
              src={`https://slrjrfzzgnjpsxcruorv.supabase.co/storage/v1/object/public/seven-img/poster/${media.poster_img}`}
              sx={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {media.poster_name ? media.poster_name : 'ยังไม่มีชื่อ'}
            </Typography>
            <Divider sx={{ borderBottomStyle: 'dashed', borderBottomWidth: '2px', borderColor: 'green', my: '2rem' }} />
            <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
              {media.poster_name ? media.poster_name : 'ยังไม่มีชื่อ'}
            </Typography>
            <Typography sx={{ fontSize: '1rem' }}>
              {media.poster_desc ? media.poster_desc : 'ยังไม่มีคำอธิบาย'}
            </Typography>
            <Divider sx={{ borderBottomStyle: 'dashed', borderBottomWidth: '2px', borderColor: 'green', my: '2rem' }} />
            <Typography sx={{ fontSize: '1.5rem' }}>
              ราคา:
              {media.poster_min_cost ? (
                media.poster_max_cost ? (
                  <> <strong>{media.poster_min_cost}</strong> - <strong>{media.poster_max_cost}</strong> บาท</>
                ) : (
                  <> <strong>{media.poster_min_cost}</strong> บาท</>
                )
              ) : (
                ' ยังไม่มีราคา'
              )}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ShowPro

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '95vh',
}