import { Grid, Container, Image, useMantineTheme, SimpleGrid } from '@mantine/core';
import Footer from './Footer';
import Nav from './Nav';
import { BadgeCard } from './BadgeCard';


const PRIMARY_COL_HEIGHT = 300;

function HeaderWithTabs() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  const child = <Image
    height={PRIMARY_COL_HEIGHT}
    radius="md"
    src="https://picsum.photos/seed/picsum/2000/3000"
    alt="Random unsplash image"
  />
    ;

  const child2 = <Image
    height={SECONDARY_COL_HEIGHT}
    radius="md"
    src="https://picsum.photos/seed/picsum/2000/3000"
    alt="Random unsplash image"
  />;

  return (
    <div>
      <Nav />
      <Container my="md">
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {child}
          <Grid gutter="md">
            <Grid.Col>
            <BadgeCard/>
            </Grid.Col>
            <Grid.Col span={6}>
              <BadgeCard/>
            </Grid.Col>
            <Grid.Col span={6}>
            <BadgeCard/>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>

  )
}

export default HeaderWithTabs