import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { AppContext } from "../../App";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const { data, setDataSearch } = useContext(AppContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{ background: "linear-gradient(90 deg, #5cb0bf, #21a58d)" }}
        >
          <Typography
            align="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Contacts
          </Typography>
        </Toolbar>
      </AppBar>
      <Search
        onChange={(e) => {
          console.log(e.target.value);
          setDataSearch(
            data.filter((contact) =>
              contact.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
      >
        <SearchIconWrapper>
          <SearchIcon color="action" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
