import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Avatar, Container, Divider, Fab, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import HomePage from '../../pages/home/homePage';
import PurchasePage from '../../pages/purchase/purchasePage';
import SalePage from '../../pages/sale/salePage';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const pages = {
  "home": {"name": 'Inicio', "page": HomePage},
  "purchase": {"name": 'Compra', "page": PurchasePage},
  "sale": {"name": 'Inicio', "page": SalePage},
  "about": {"name": 'Sobre a LOWS', "page": HomePage}
};

export default function HeaderAppBar() {
  const [content, setContent] = React.useState(pages["home"]["page"])
  const [sections, setSections] = React.useState(["home", "purchase", "sale", "about"]);

  const changePage = (page) => {
    setContent(page);
  }

  return (
    <>
      <Box display='flex' justifyContent='space-around' alignItems='center' p={1}>
        <Box>
          <Link to="/">
            <Box
              component='img'
              alt="Logo da Lows"
              src="/images/Logo.png"
              sx={{
                maxWidth: 180,
              }}
            />
          </Link>
        </Box>
        <Box display='flex' alignItems='center' gap='48px'>
          {sections.map((section, index) => (
            <div onClick={() => changePage(pages[section]["page"])} key={index}>
              <Typography 
              variant="body1" 
              key={index}
              sx={{cursor: 'pointer'}}
              >
                {pages[section]["name"]}
              </Typography>
            </div>
          ))}
        </Box>
        <Box display='flex' gap='16px'>
          <Divider orientation="vertical" flexItem /> 
          <Stack direction="row">
            <Tooltip>
              <IconButton>
                <FavoriteBorderOutlinedIcon color='primary'/> 
              </IconButton>
            </Tooltip>
            <Tooltip>
              <IconButton>
                <QuestionAnswerOutlinedIcon color='primary'/> 
              </IconButton>
            </Tooltip>
          </Stack>
          <Avatar src="/images/profile.jpg" sx={{marginLeft: '16px'}}/>
        </Box>
      </Box>
      <Box>
        {content}
      </Box>
    </>
  )
}
