export async function handler(event, context) {
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch(`https://github-readme-stats.vercel.app/api?username=CpmJhon21&show_icons=true&theme=radical&count_private=true&include_all_commits=true&token=${token}`);
  const imageBuffer = await res.arrayBuffer();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache'
    },
    body: Buffer.from(imageBuffer).toString('base64'),
    isBase64Encoded: true
  };
}
