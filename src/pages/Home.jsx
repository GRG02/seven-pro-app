import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Logo from './../assets/logo.png'
import './CarouselStyles.css'
import { BorderRight, TrySharp } from '@mui/icons-material';
import axios from 'axios';

function Home() {

    const [media, setMedia] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        const getAllImages = async () => {
            try {
                const res = await axios.get(`https://n8n-bb7z.onrender.com/webhook/seven-pro/media/`);
                setMedia(res.data.body);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getAllImages();
    }, [])

    const carouselImages = media.filter(item => item.poster_type === "c");
    const sliderImages = media.filter(item => item.poster_type === "s");
    const posterImages = media.filter(item => item.poster_type === "p");

    return (
        <>
            <Box sx={container}>
                <Box sx={{ maxWidth: '100vw', maxHeight: '60vh', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={false}
                        spaceBetween={30}
                        slidesPerView={1}
                        style={{
                            width: '100%',
                            maxHeight: '60vh',
                            aspectRatio: '16 / 9', // 💡 ใช้ aspect ratio แทน height
                        }}
                    >
                        {carouselImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={`https://slrjrfzzgnjpsxcruorv.supabase.co/storage/v1/object/public/seven-img/poster/${item.poster_img}`}
                                    alt={`slide-${index}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Typography sx={{ color: 'green', fontSize: '2rem', fontWeight: 'bold', mt: '3rem' }}>สินค้าโปรโมชั่น (Poster)</Typography>
                <Box sx={{ bgcolor: 'green', height: '0.5rem' }} />
                <Box>
                    <Grid container spacing={2} sx={{ width: '100%', mt: '2rem' }}>
                        {posterImages.map((item) => (
                            <Grid item key={item.poster_id} size={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 3 }}>
                                <Paper elevation={5} sx={poster_paper} onClick={() => navigate(`/showpro/${item.poster_id}`)}>
                                    <Box
                                        component="img"
                                        src={`https://slrjrfzzgnjpsxcruorv.supabase.co/storage/v1/object/public/seven-img/poster/${item.poster_img}`}
                                        alt={`poster-${item.poster_id}`}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'fill',
                                        }}
                                    />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography sx={{ color: 'green', fontSize: '2rem', fontWeight: 'bold', mt: '3rem' }}>อยากให้คุณลอง... (Slider)</Typography>
                <Box sx={{ bgcolor: 'green', height: '0.5rem' }} />
                <Box sx={{ mt: '2rem', width: '100%', overflow: 'hidden' }}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        loop={false}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 2 },       // มือถือ
                            600: { slidesPerView: 3 },     // แท็บเล็ตแนวตั้ง
                            900: { slidesPerView: 4 },     // แท็บเล็ตแนวนอน
                            1200: { slidesPerView: 4 },    // Desktop
                        }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {sliderImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={`https://slrjrfzzgnjpsxcruorv.supabase.co/storage/v1/object/public/seven-img/poster/${item.poster_img}`}
                                    alt={`slide-${index}`}
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1 / 1', // ทำให้สูง-ต่ำสัมพันธ์กับความกว้าง
                                        objectFit: 'fill',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'scale(0.97)',
                                            transition: '0.5s ease-in-out'
                                        },
                                    }}
                                    onClick={() => navigate(`/showpro/${item.poster_id}`)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Box sx={{ height: '10rem' }} />
            </Box>
        </>
    )
}

export default Home

const container = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
    minHeight: '50vh',
    // bgcolor: 'blue'
}

const poster_paper = {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(0.97)',
        transition: '0.5s ease-in-out'
    },
    overflow: 'hidden',
}