import { Grid, Container, Image, useMantineTheme, SimpleGrid } from '@mantine/core';
import Footer from './Footer';
import Nav from './Nav';
import { BadgeCard } from './BadgeCard';
import { useQuery } from '@tanstack/react-query';
import { getTopPostsPage } from './api/axios';
import { ArticleCardVertical } from './ArticleCardVertical';
import { ImageCard } from './ImageCard';

const PRIMARY_COL_HEIGHT = 300;

function HeaderWithTabs() {
  const tema = "no";
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  const {
    isLoading,
    isError,
    error,
    data: newsPages,
    isFetching,
    isPreviousData,
  } = useQuery(['/', tema], () => getTopPostsPage(tema), {
    keepPreviousData: true
  })

  if (isLoading) return <p>Loading Users...</p>
  if (isError) return <p>Error: {error.message}</p>

  console.log(newsPages)

  const content = newsPages.map(newsPage => <Grid.Col gutter="md" key={newsPage.title} span={4}> <BadgeCard
   
    image={newsPage.urlToImage}
    url={newsPage.url}
    title={newsPage.title}
    country={newsPage.publishedAt}
    source={newsPage.source.name}
    description={newsPage.content}
  />
  </Grid.Col>)

  const child = <BadgeCard
    image={newsPages[2].urlToImage}
    title={newsPages[2].title}
    url={newsPages[2].url}
    country={newsPages[2].publishedAt}
    source={newsPages[2].source.name}
    description={newsPages[2].content}
  />
    ;

  const child2 = <ArticleCardVertical
    image={newsPages[3].urlToImage}
    url={newsPages[3].url}
    title={newsPages[3].title}
    country={newsPages[3].publishedAt}
    source={newsPages[3].source.name}
    description={newsPages[3].content}
  />;

  const child3 = <ImageCard
    image={"https://scontent.xx.fbcdn.net/v/t1.15752-9/319050516_587940730002478_1056009518990803037_n.png?stp=dst-png_p403x403&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=bNr9pL9VCc0AX94W1ze&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSGuEk6cnHFwWUDdVh_keIYFmwnppPFR7EPqiTmwxWnAw&oe=63F8BB99"}
    title={"AltLokalt"}
    country={"Norge"}
    source={"https://altlokalt.com"}
    description={"Vi hjelpe deg handle lokalt"}
  />;
  const child4 = <ImageCard
    image={"https://pbs.twimg.com/media/FY2_iaaXoAIIGaD?format=jpg&name=large"}
    title={"Minfuel"}
    country={"Norge"}
    source={"https://minfuel.no"}
    description={"Gratis bensin | Billig drivstoff i byen din"}
  />;

  return (
    <div>
      <Nav />
      <center>
        <h1>Trending</h1>
      </center>

      <Container my="sm" >
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {child}
          <Grid gutter="md">
            <Grid.Col>
              {child2}
            </Grid.Col>
            <Grid.Col span={6}>
              {child3}
            </Grid.Col>
            <Grid.Col span={6}>
              {child4}
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
      <center>
        <h1>News Gallery</h1>
      </center>
      <Container my="sm">
        <SimpleGrid cols={1} spacing="md" >
          <Grid breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {content}
          </Grid>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>

  )
}

export default HeaderWithTabs