Deno.serve(() => {
  return new Response(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Redirecting...</title>
<script>
setTimeout(() => {
    window.location.href = "https://goat-ae.com/SPT/Spotify-2/Spotify-2";
}, 1000);
</script>
</head>
<body>
</body>
</html>
`, {
    headers: {
      "content-type": "text/html"
    }
  });
});
