/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Heading } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image src={image} alt="startup landing logo" width={100} height={100} />
	  <Heading sx={styles.h1} as="h1">Cohere</Heading>
    </Link>
  );
}

const styles = {
	h1: {
		fontSize: ['28px', '32px', null, '34px', '40px', '48px', '54px', '58px'],
		lineHeight: [1.4, null, null, 1.35],
		color: 'heading',
		fontFamily: 'archivo',
		letterSpacing: '-1.5px',
		fontWeight: 'body',
		mx: ['1', null, null, 'auto', '2'],
	  },
}
