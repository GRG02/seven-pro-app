import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import Logo from './../src/assets/logo.png'

function AboutUs() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '95vh' }}>
            <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <img src={Logo} alt="แอปของเรา" style={{ width: '200px', marginBottom: '1rem' }} />
                    <Typography variant="h4" gutterBottom>
                        เกี่ยวกับเรา
                    </Typography>
                    <Divider sx={{ width: '60px', height: '4px', backgroundColor: 'green', margin: '0 auto 1rem' }} />
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                        แพลตฟอร์มของเราเป็นเว็บไซต์ที่จัดแสดงโฆษณาและโปรโมชั่นจากร้านค้าต่าง ๆ โดยมีแนวคิดคล้ายคลึงกับร้านสะดวกซื้อ เช่น 7-Eleven อย่างไรก็ตาม เรามิได้ดำเนินการขายสินค้าโดยตรงแต่อย่างใด
                        จุดมุ่งหมายหลักของระบบคือการอำนวยความสะดวกให้แก่ร้านค้าในการประชาสัมพันธ์สินค้าและบริการที่อยู่ในช่วงส่งเสริมการขายได้อย่างมีประสิทธิภาพ
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, fontSize: '1.1rem' }}>
                        ผู้ใช้งานสามารถเข้าถึงข้อมูลโปรโมชั่นล่าสุดได้โดยไม่จำเป็นต้องติดตั้งแอปพลิเคชันหรือสมัครสมาชิกใด ๆ ทั้งสิ้น
                        เรามุ่งหวังให้แพลตฟอร์มนี้เป็นสื่อกลางที่ช่วยเพิ่มโอกาสทางการตลาดให้แก่ผู้ประกอบการ ในขณะเดียวกันก็ช่วยให้ผู้บริโภคสามารถเข้าถึงข้อเสนอที่คุ้มค่าได้อย่างสะดวกรวดเร็ว
                        ระบบรองรับการอัปโหลดภาพและข้อมูลโปรโมชั่นจากร้านค้าโดยตรงอย่างครบถ้วน
                    </Typography>
                </Box>
            </Container>
        </Box>

    );
}

export default AboutUs;