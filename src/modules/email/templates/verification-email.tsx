import * as React from 'react';

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

const RydeEmailVerification = ({
  name,
  verificationUrl,
}: {
  name: string;
  verificationUrl: string;
}) => {
  return (
    <Html>
      <Preview>Verify your email to start riding with Ryde</Preview>
      <Tailwind>
        <Head />
        <Body className="bg-[#F8F8F8] font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-lg max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="bg-[#0286FF] text-white text-center py-[32px] rounded-t-[8px]">
              <Heading className="text-[32px] font-bold m-0 text-white">
                RYDE
              </Heading>
              <Text className="text-[16px] text-[#C3D9FF] mt-[8px] m-0">
                Your ride, your way
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="px-[40px] py-[32px]">
              <Heading className="text-[24px] font-bold text-[#333333] mb-[24px]">
                Welcome to Ryde, {name}!
              </Heading>

              <Text className="text-[16px] text-[#666666] leading-[24px] mb-[24px]">
                Thanks for signing up! We're excited to have you join our
                community of riders. To get started and ensure the security of
                your account, please verify your email address.
              </Text>

              <Text className="text-[16px] text-[#666666] leading-[24px] mb-[32px]">
                Click the button below to verify your email and start booking
                your rides:
              </Text>

              {/* Verification Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-[#0286FF] text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>

              {/* Alternative link */}
              <Section className="bg-[#F5F8FF] rounded-[8px] p-[24px] mb-[32px] border border-solid border-[#EBF4FF]">
                <Text className="text-[14px] text-[#666666] leading-[20px] mb-[12px] m-0">
                  Can't click the button? Copy and paste this link into your
                  browser:
                </Text>
                <Link
                  href={verificationUrl}
                  className="text-[14px] text-[#0286FF] break-all font-medium"
                >
                  {verificationUrl}
                </Link>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-[#F6F8FA] px-[40px] py-[24px] rounded-b-[8px] border-t border-solid border-[#EBEBEB]">
              <Text className="text-[12px] text-[#AAAAAA] text-center leading-[16px] m-0">
                © {new Date().getFullYear()} Ryde Technologies Inc. All rights
                reserved.
              </Text>

              <Text className="text-[12px] text-[#AAAAAA] text-center leading-[16px] mt-[8px] m-0">
                <Link href="#" className="text-[#999999] no-underline">
                  Privacy Policy
                </Link>
                {' | '}
                <Link href="#" className="text-[#999999] no-underline">
                  Terms of Service
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default RydeEmailVerification;
