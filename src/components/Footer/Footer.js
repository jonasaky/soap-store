import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <a color="inherit" href="/">
          Jonás García
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}
