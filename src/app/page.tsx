import { HomeActions } from "@/components/home-actions";
import { Container, Flex, Kbd, Link, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-10 sm:p-24">
      <Container size="1">
        <Flex direction="column" align="center" gap="5">
          <Image
            src="/wordmark.svg"
            alt="LiveKit"
            width="240"
            height="120"
            className="invert dark:invert-0 mt-8 mb-2"
          />
           <Text as="p">
            BDISC.golf Live offers an interactive disc golf livestream with chat,
            perfect for learning, watching tournaments, and participating in events.
            It’s ideal for tutorials, engaging with pros, and joining special challenges,
            creating a vibrant community experience for disc golf enthusiasts. Follow us
            on {" "}
            <Link href="https://tiktok.com/bdiscgolf" target="_blank">
              TikTok
            </Link>for the latest live events.
          </Text>
          <HomeActions />
          <Separator orientation="horizontal" size="4" className="my-2" />
          <Text as="p" size="2">
            Sign up to become a BDISC Pro member to host live events {" "}
            <Link
              href="https://bdisc.golf/register/"
              target="_blank"
            >
              here
            </Link>
            .
            {/* And also be sure to check out clone our{" "}
            <Link
              href="https://github.com/livekit-examples/swift-livestream"
              target="_blank"
            >
              iOS
            </Link>{" "}
            and <Link href="https://github.com/livekit-examples/android-livestream" target="_blank">Android</Link> clients, which are compatible with
            this web app! */}
          </Text>
        </Flex>
      </Container>
    </main>
  );
}
