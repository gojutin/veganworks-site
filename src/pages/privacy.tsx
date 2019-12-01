import React from "react";
// Components
import { CoverImagePageLayout } from "../components/common/cover-image-page-layout";
import { Link } from "../components/common/link";

const Privacy: React.FC = () => {
  return (
    <CoverImagePageLayout title="Privacy Policy">
      <h3>Your privacy is important to us.</h3>
      <br />
      <p> VeganWorks, Inc. is located at:</p>

      <br />
      <address>
        VeganWorks, Inc.
        <br />
        <p>70-3 Comsewogue Road</p>
        <p>East Setauket, NY 11733, USA</p>
        <p>631-403-0362</p>
      </address>
      <br />
      <p>
        It is VeganWorks, Inc.&apos;s policy to respect your privacy regarding
        any information we may collect while operating our website. This Privacy
        Policy applies to{" "}
        <Link
          style={{ display: "inline-block" }}
          href="https://www.veganworks.com"
        >
          https://www.veganworks.com
        </Link>{" "}
        (hereinafter, &quot;us&quot;, &quot;we&quot;, or
        &quot;https://www.veganworks.com&quot;). We respect your privacy and are
        committed to protecting personally identifiable information you may
        provide us through the Website. We have adopted this privacy policy
        (&quot;Privacy Policy&quot;) to explain what information may be
        collected on our Website, how we use this information, and under what
        circumstances we may disclose the information to third parties. This
        Privacy Policy applies only to information we collect through the
        Website and does not apply to our collection of information from other
        sources.
      </p>
      <p>
        This Privacy Policy, together with the Terms and conditions posted on
        our Website, set forth the general rules and policies governing your use
        of our Website. Depending on your activities when visiting our Website,
        you may be required to agree to additional terms and conditions.
      </p>
      <br />
      <h2>Website Visitors</h2>
      <p>
        Like most website operators, VeganWorks, Inc. collects
        non-personally-identifying information of the sort that web browsers and
        servers typically make available, such as the browser type, language
        preference, referring site, and the date and time of each visitor
        request. VeganWorks, Inc.&apos;s purpose in collecting non-personally
        identifying information is to better understand how VeganWorks,
        Inc.&apos;s visitors use its website. From time to time, VeganWorks,
        Inc. may release non-personally-identifying information in the
        aggregate, e.g., by publishing a report on trends in the usage of its
        website.
      </p>
      <p>
        VeganWorks, Inc. also collects potentially personally-identifying
        information like Internet Protocol (IP) addresses for logged in users
        and for users leaving comments on https://www.veganworks.com blog posts.
        VeganWorks, Inc. only discloses logged in user and commenter IP
        addresses under the same circumstances that it uses and discloses
        personally-identifying information as described below.
      </p>
      <br />
      <h2>Gathering of Personally-Identifying Information</h2>
      <p>
        Certain visitors to VeganWorks, Inc.&apos;s websites choose to interact
        with VeganWorks, Inc. in ways that require VeganWorks, Inc. to gather
        personally-identifying information. The amount and type of information
        that VeganWorks, Inc. gathers depends on the nature of the interaction.
        For example, we ask visitors who sign up for our newsletter at
        https://www.veganworks.com to provide an email address.
      </p>
      <br />
      <h2>Security</h2>
      <p>
        The security of your Personal Information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage is 100% secure. While we strive to use commercially
        acceptable means to protect your Personal Information, we cannot
        guarantee its absolute security.
      </p>
      <br />
      <h2>Links To External Sites</h2>
      <p>
        Our Service may contain links to external sites that are not operated by
        us. If you click on a third party link, you will be directed to that
        third party&apos;s site. We strongly advise you to review the Privacy
        Policy and terms and conditions of every site you visit.
      </p>
      <p>
        We have no control over, and assume no responsibility for the content,
        privacy policies or practices of any third party sites, products or
        services.
      </p>
      <br />
      <h2>Aggregated Statistics</h2>
      <p>
        VeganWorks, Inc. may collect statistics about the behavior of visitors
        to its website. VeganWorks, Inc. may display this information publicly
        or provide it to others. However, VeganWorks, Inc. does not disclose
        your personally-identifying information.
      </p>
      <br />
      <h2>Cookies</h2>
      <p>
        To enrich and perfect your online experience, VeganWorks, Inc. uses
        &quot;Cookies&quot;, similar technologies and services provided by
        others to display personalized content, appropriate advertising and
        store your preferences on your computer.
      </p>
      <p>
        A cookie is a string of information that a website stores on a
        visitor&apos;s computer, and that the visitor&apos;s browser provides to
        the website each time the visitor returns. VeganWorks, Inc. uses cookies
        to help VeganWorks, Inc. identify and track visitors, their usage of
        https://www.veganworks.com, and their website access preferences.
        VeganWorks, Inc. visitors who do not wish to have cookies placed on
        their computers should set their browsers to refuse cookies before using
        VeganWorks, Inc.&apos;s websites, with the drawback that certain
        features of VeganWorks, Inc.&apos;s websites may not function properly
        without the aid of cookies.
      </p>
      <p>
        By continuing to navigate our website without changing your cookie
        settings, you hereby acknowledge and agree to VeganWorks, Inc.&apos;s
        use of cookies.
      </p>
      <br />
      <h2>Privacy Policy Changes</h2>
      <p>
        Although most changes are likely to be minor, VeganWorks, Inc. may
        change its Privacy Policy from time to time, and in VeganWorks,
        Inc.&apos;s sole discretion. VeganWorks, Inc. encourages visitors to
        frequently check this page for any changes to its Privacy Policy. Your
        continued use of this site after any change in this Privacy Policy will
        constitute your acceptance of such change.
      </p>
      <br />
      <h2>Credit & Contact Information</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        via{" "}
        <Link
          style={{ display: "inline-block" }}
          href="mailto:info@veganworks.com"
        >
          email
        </Link>{" "}
        or{" "}
        <Link style={{ display: "inline-block" }} href="tel:6314030362">
          phone
        </Link>
        .
      </p>
    </CoverImagePageLayout>
  );
};

export default Privacy;
