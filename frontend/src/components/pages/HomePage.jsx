// src/pages/Home.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { People, AccessTime, Work, Security } from "@mui/icons-material";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#f9fafc", minHeight: "100vh" }}>
      {/* Navbar */}
      <AppBar position="static" color="primary" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Company EMS
          </Typography>
          <Button color="inherit">Login</Button>
          <Button variant="outlined" color="inherit" sx={{ ml: 2 }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          background: "linear-gradient(to right, #1976d2, #0d47a1)",
          color: "white",
        }}
      >
        <Typography variant="h3" gutterBottom fontWeight="bold">
          Welcome to Company EMS Portal
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "700px", mx: "auto", mb: 3 }}>
          Streamline employee management, track attendance, and boost
          productivity — all in one place.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ px: 4, py: 1.5 }}
        >
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          Key Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {[
            {
              icon: <People fontSize="large" color="primary" />,
              title: "Employee Directory",
              desc: "Centralized employee database with quick access.",
            },
            {
              icon: <AccessTime fontSize="large" color="primary" />,
              title: "Attendance Tracking",
              desc: "Easy check-in/out with real-time insights.",
            },
            {
              icon: <Work fontSize="large" color="primary" />,
              title: "Leave Management",
              desc: "Automated leave requests and approvals.",
            },
            {
              icon: <Security fontSize="large" color="primary" />,
              title: "Role-Based Access",
              desc: "Secure data with admin, HR, and employee roles.",
            },
          ].map((feature, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  textAlign: "center",
                  py: 4,
                  boxShadow: 3,
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">{feature.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Quick Stats */}
      <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            Quick Stats
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {[
              { label: "Employees", value: "250+" },
              { label: "Departments", value: "12" },
              { label: "Active Projects", value: "35" },
            ].map((stat, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                <Card
                  sx={{
                    textAlign: "center",
                    py: 4,
                    borderRadius: 3,
                    boxShadow: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h4"
                      color="primary"
                      fontWeight="bold"
                    >
                      {stat.value}
                    </Typography>
                    <Typography color="text.secondary">{stat.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          background: "linear-gradient(to right, #0d47a1, #1976d2)",
          color: "white",
          mt: 6,
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Ready to Empower Your Workforce?
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "600px", mx: "auto", mb: 3 }}>
          Get started today and manage employees, projects, and productivity in
          one place.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ px: 4, py: 1.5 }}
        >
          Explore Dashboard
        </Button>
      </Box>
    </Box>
  );
}
