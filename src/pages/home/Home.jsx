import React from 'react'
import Pic from 'src/assets/asset.png'
import {
    Box,
    Typography,
    Container,
    Stack,
    Grid
} from '@mui/material'
function Home() {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
                ml: '5%',
                mr: '5%',
                mt: '10%'
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={'10%'}>
                    < Box>
                        <Grid
                            container
                            spacing={3}
                        >
                        <img src={Pic} alt="Wavy" />

                            {/* <Grid
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <img src={Pic} alt="Wavy" style={{ width: '20rem', height: '20rem', objectFit: 'cover' }} />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                lg={8}
                            >
                                <Box sx={{ mt: '10%' }}>
                                    <Typography sx={{
                                        fontSize: '1rem',
                                        fontWeight: "bold",
                                        color: "#1c2536",
                                    }}
                                        variant="overline">
                                        {`Welcome to acted Management System!`}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '0.9rem',
                                        color: "#9da4ae",
                                    }}
                                        color="text.secondary"
                                    >
                                        {`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`}
                                    </Typography>
                                   
                                </Box>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>


    )
}

export default Home