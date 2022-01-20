import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <div style={{ position: 'absolute', bottom: 2, left: 2 }}>
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
