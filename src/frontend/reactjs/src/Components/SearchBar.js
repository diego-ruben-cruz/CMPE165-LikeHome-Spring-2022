import "./SearchBar.css";
import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { alpha, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@material-ui/core/Input";
import useLocalStorage from "./useLocalStorage";

function SearchBar() {
  // let  local = localStorage;
  // document.getElementById("input").value = local;

  const [guests, setGuests] = useState("5");
  useEffect(() => {
    // storing input name
    localStorage.setItem("guests", guests);
  }, [guests]);
  // var name = localStorage.getItem("location");
  // console.log(name);
  // localStorage.clear();
  const [name, setName] = useState("");
  useEffect(() => {
    // storing input name
    localStorage.setItem("name", name);
  }, [name]);
  // const [values, setValue] = useLocalStorage('key', 'initialValue');

  return (
    <Box
      padding={{ xs: 3, sm: 6 }}
      width={1}
      component={Card}
      boxShadow={1}
      sx={{
        zIndex: 100,
        position: "absolute",
        top: "400px",
      }}
    >
      <form noValidate autoComplete="off">
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          <Box
            width={1}
            marginRight={{ xs: 0, md: 2 }}
            marginBottom={{ xs: 4, md: 0 }}
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <TextField
              sx={{
                height: 54,
                marginRight: { xs: 0, md: 2 },
                marginBottom: { xs: 4, md: 0 },
              }}
              variant="outlined"
              color="primary"
              size="medium"
              label="Name"
              // id="saveServer"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box
                      component={"svg"}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                      color={"primary.main"}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{
                height: 54,
              }}
              variant="outlined"
              color="primary"
              size="medium"
              label="Name"
              value={guests}
              onChange={(a) => setGuests(a.target.value)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment type="number" position="start">
                    <Box
                      component={"svg"}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                      color={"primary.main"}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Button
              href="/searchpage/"
              sx={{ height: 54, whiteSpace: "nowrap" }}
              variant="contained"
              color="primary"
              size="medium"
              fullWidth
            >
              Search Now
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default SearchBar;
