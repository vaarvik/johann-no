import type { Metadata } from "next"
import { Heading } from "@/components/ui/typography/heading"
import List, { ListItem } from "@/components/ui/typography/list"
import { Paragraph } from "@/components/ui/typography/paragraph"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy and cookie policy for Johann.no",
}

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-6 md:px-8 py-12 md:py-16 max-w-4xl">
      <Heading as="h1" level={1} className="mb-6">Privacy Policy for Johann.no</Heading>
      <Paragraph className="mb-8">
        Your privacy matters. This page explains what data is collected, how it is used, and your rights.
      </Paragraph>

      <section className="space-y-4 mb-10">
        <Heading as="h2" level={3}>What is Personal Data?</Heading>
        <Paragraph>
          Personal data refers to any information that can be linked to you, such as your name, email address, phone number, or data regarding how you use our website (e.g., pages you visit, clicks).
        </Paragraph>
      </section>

      <section className="space-y-4 mb-10">
        <Heading as="h2" level={3}>Information We Collect</Heading>
        <Paragraph>
          We collect the following types of data when you visit Johann.no:
        </Paragraph>
        <Heading as="h3" level={4} className="mt-4">Visitor Analytics</Heading>
        <Paragraph>
          We use PostHog to collect anonymized data on website usage, such as time spent on pages, navigation patterns, and other interactions. This data helps us improve the website. PostHog stores the data within the EU and processes it according to their privacy policy.
        </Paragraph>
        <Heading as="h3" level={4} className="mt-4">Cookies</Heading>
        <Paragraph>
          We use cookies to collect information about how you interact with the website to enhance your experience. You can manage cookie settings in your browser.
        </Paragraph>
      </section>

      <section className="space-y-4 mb-10">
        <Heading as="h2" level={3}>Cookie Consent</Heading>
        <Paragraph>
          Upon visiting Johann.no, we will request your explicit consent to use non-essential cookies, including those for analytics purposes (such as those used by PostHog). These cookies help us understand how visitors use the site, allowing us to enhance your user experience.
        </Paragraph>
        <Paragraph>
          By clicking “Accept” on the cookie consent banner, you consent to the use of cookies for these purposes. If you do not consent, cookies will not be set, and you may continue to use the website with limited functionality. You can withdraw your consent at any time by adjusting your cookie settings in your browser.
        </Paragraph>
      </section>

      <section className="space-y-4 mb-10">
        <Heading as="h2" level={3}>Cookie Policy</Heading>
        <Paragraph>
          Cookies are small text files that are stored on your device when you visit our website. We use cookies for various purposes, including enhancing your user experience and collecting anonymized usage statistics. The types of cookies we use include:
        </Paragraph>
        <Heading as="h3" level={4} className="mt-4">Essential Cookies</Heading>
        <Paragraph>
          These cookies are necessary for the website to function properly. They enable basic functionalities like page navigation and access to secure areas of the site. These cookies are set automatically when you visit the website.
        </Paragraph>
        <Heading as="h3" level={4} className="mt-4">Analytics Cookies</Heading>
        <Paragraph>
          We use analytics cookies, such as those provided by PostHog, to understand how visitors interact with our site. These cookies collect anonymous information about your browsing activities, such as which pages you visit and how long you spend on each page. This helps us improve our website and services.
        </Paragraph>
        <Paragraph>
          You can control and manage cookies through your browser settings. You can block or delete cookies at any time, but please note that doing so may impact your experience on our website.
        </Paragraph>
        <Paragraph>
          For more information on how cookies are used on Johann.no and how you can manage your preferences, please contact us or refer to your browser’s help section.
        </Paragraph>
      </section>

      <section className="space-y-4 mb-10">
        <Heading as="h2" level={3}>Data Sharing</Heading>
        <Paragraph>
          We do not share your personal data with any third parties, except for PostHog, which is used for analytics purposes as outlined in their privacy policy.
        </Paragraph>
      </section>

      <section className="space-y-4 mb-10">
        <Heading as="h2" level={3}>Your Rights</Heading>
        <List>
          <ListItem>
            <Paragraph as="span"><strong>Access:</strong> Request a copy of the data we hold about you.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph as="span"><strong>Correction:</strong> Request corrections if the data is incorrect or incomplete.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph as="span"><strong>Deletion:</strong> Request the deletion of your personal data in certain circumstances.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph as="span"><strong>Restriction of Processing:</strong> Request limitation of the processing of your data in specific situations.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph as="span"><strong>Object to Processing:</strong> Object to processing based on legitimate interest.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph as="span"><strong>Data Portability:</strong> Request the transfer of your data to another data controller.</Paragraph>
          </ListItem>
        </List>
      </section>

      <section className="space-y-4">
        <Heading as="h2" level={3}>Contact</Heading>
        <Paragraph>
          For any questions regarding your personal data, please contact us at <a className="underline" href="mailto:contact@johann.no">contact@johann.no</a>.
        </Paragraph>
      </section>
    </main>
  )
}
