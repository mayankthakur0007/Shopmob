import React from "react";
import { useQuery } from "@tanstack/react-query";
import { storeapi } from "../endpoints";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const QueryExample = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () =>
    fetch(storeapi + "products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
  );
  return (
    <>
      <Box
        sx={{
          p: 2,
          display: "grid",
          justifyItems:"center",
          gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        {data &&
          data.map((e: any) => (
            <Card sx={{ maxWidth: 345, boxShadow: 0, width: '100%' }}>
              <CardMedia
                component="img"
                height="150"
                width="70"
                p="5px"
                image={e.image}
                sx={{ objectFit: "contain" }}
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  noWrap={true}
                >
                  {e.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  ${e.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Box>
    </>
  );
};
export default QueryExample;
