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
            We Live Baby! Welcome to BLKLUV livestream. You can join or start
            your own stream promoted on BLKLUV {" "}
            <Link href="https://linktr.ee/blkluvorg" target="_blank">
              Linktree
            </Link>
            . Sell your services, products or access to your BLKLUV Discord{" "}
            <Kbd>⌘&thinsp;CLUB</Kbd> channel for Love Cash Money Live!
          </Text>
          <HomeActions />
          <Separator orientation="horizontal" size="4" className="my-2" />
          <Text as="p" size="2">
            Join the new BLKLUV Reddit {" "}
            <Link
              href="https://hahz.blkluv.org"
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
