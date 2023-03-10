"use client";
import {
  Button,
  Card,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
  User,
  useTheme,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { isDark } = useTheme();
  const { data: session } = useSession();
  const { user } = session || {};

  const cardItems = [
    {
      title: "Next.js 13",
      description: "App directory, routing, layouts, API routes.",
      footer: "Next.js 13 Beta documentation",
      url: "https://beta.nextjs.org/docs",
      svg: (
        <svg viewBox="0 0 24 24" style={{ height: 32 }}>
          <path
            d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
        </svg>
      ),
    },
    {
      title: "React 18",
      description: "Server and client components.",
      footer: "React 18 documentation",
      url: "https://reactjs.org/docs/getting-started.html",
      svg: (
        <svg viewBox="0 0 24 24" style={{ height: 32 }}>
          <path
            d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
        </svg>
      ),
    },
    {
      title: "Database",
      description: "ORM using Prisma and PostgreSQL database using Railway.",
      footer: "Prisma documentation",
      url: "https://www.prisma.io/docs/getting-started/quickstart",
      svg: (
        <svg
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 32 }}
        >
          <path
            d="M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
          <path
            d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
        </svg>
      ),
    },
    {
      title: "Components",
      description:
        "UI components built with NextUI. Dark mode implemented using next-themes.",
      footer: "NextUI documentation",
      url: "https://nextui.org/docs/guide/getting-started",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 374 374"
          style={{ height: 32 }}
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-773 -353)">
            <rect
              id="Rectangle_1"
              data-name="Rectangle 1"
              width="374"
              height="374"
              rx="99"
              transform="translate(773 353)"
              fill={isDark ? "#FFFFFF" : "#100F13"}
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M127.309-159.273h14.543V-53.817a55.656,55.656,0,0,1-7.621,29.047A54.131,54.131,0,0,1,113.039-4.627Q99.468,2.722,81.5,2.722q-17.887,0-31.5-7.388A54.429,54.429,0,0,1,28.775-24.809a55.451,55.451,0,0,1-7.621-29.008V-159.273H35.7V-54.828a44.65,44.65,0,0,0,5.677,22.592A40.568,40.568,0,0,0,57.355-16.643q10.3,5.677,24.148,5.677t24.186-5.677a40.232,40.232,0,0,0,15.982-15.593,44.893,44.893,0,0,0,5.638-22.592Zm71.393,0V0H184.159V-159.273Z"
              transform="translate(851 620)"
              fill={isDark ? "#100F13" : "#FFFFFF"}
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Authentication",
      description:
        "OAuth 2.0 authentication through Google, GitHub, and Discord using NextAuth.js.",
      footer: "NextAuth.js documentation",
      url: "https://next-auth.js.org/getting-started/introduction",
      svg: (
        <svg
          viewBox="0 0 24 24"
          // fill="none"
          stroke={isDark ? "#000000" : "#FFFFFF"}
          strokeWidth="1"
          className="h-12 w-12 fill-current"
          style={{ height: 32 }}
          fill={isDark ? "#FFFFFF" : "#100F13"}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: "Payments",
      description:
        "Free and paid subscriptions using Stripe unlocking features for users.",
      footer: "Stripe Payment API documentation",
      url: "https://stripe.com/docs/payments",
      svg: (
        <svg
          viewBox="0 0 24 24"
          className="h-12 w-12 fill-current"
          style={{ height: 32 }}
        >
          <path
            d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
            fill={isDark ? "#FFFFFF" : "#100F13"}
          />
        </svg>
      ),
    },
  ];

  return (
    <main>
      <Container>
        <Spacer />
        <Container gap={0}>
          <Text
            h1
            size={60}
            css={{
              lineHeight: "1.1",
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Welcome{user && ", " + user.name}!
          </Text>
          <Text
            h1
            size={40}
            css={{
              lineHeight: "1.2",
            }}
            weight="medium"
          >
            This is an app built to showcase the capabilities of Next.js 13.
          </Text>
          <Spacer y={1} />
          <Row wrap="wrap">
            <Button
              color="gradient"
              shadow
              ghost
              style={{ marginBottom: 12 }}
              onPress={() =>
                window.open(
                  "https://github.com/yaseenmustapha/nextjs-13-demo-app"
                )
              }
            >
              Source Code on GitHub
            </Button>

            <User
              src="https://avatars.githubusercontent.com/u/26501999"
              name="Yaseen Mustapha"
              pointer
              zoomed
              onClick={() => window.open("https://github.com/yaseenmustapha")}
            >
              <User.Link href="https://github.com/yaseenmustapha">
                github.com/yaseenmustapha
              </User.Link>
            </User>
          </Row>

          <Spacer y={2} />

          <Text h1 size={40} weight="medium" b style={{paddingLeft: 12}}>
            Features
          </Text>
        </Container>

        <Grid.Container gap={2} justify="center">
          {cardItems.map((item, i) => (
            <Grid sm={4} key={i} style={{ width: "100%" }}>
              <Card css={{ paddingLeft: 6, paddingTop: 6, paddingBottom: 6 }}>
                <Card.Header>
                  {item.svg}
                  <Spacer x={0.5} />
                  <Text b>{item.title}</Text>
                </Card.Header>
                <Card.Body>
                  <Text>{item.description}</Text>
                </Card.Body>
                <Card.Footer>
                  <Link color="primary" target="_blank" href={item.url}>
                    {item.footer}
                  </Link>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </main>
  );
}
