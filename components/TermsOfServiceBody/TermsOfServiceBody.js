import React from "react";
import Image from "next/image";
import Bullet from "../../public/icons/bullet-point.svg";

const TermsOfServiceBody = () => {
  return (
    <div className="lg:px-16 pb-24 px-2 text-base bg-white text-[#2B3056]">
      <div className="pt-8 leading-8 opacity-90">
        <p className="text-2xl font-semibold">These Terms govern </p>
        <ol>
          <li className="flex items-center">
            <Image src={Bullet.src} height={40} width={40} alt={""} />
            the use of Adproof, and,
          </li>
          <li className="flex items-center">
            <Image src={Bullet.src} height={40} width={40} alt={""} />
            any other related Agreement or legal relationship with the Owner in
            a legally binding way.
          </li>
        </ol>
        Capitalized words are defined in the relevant dedicated section of this
        document.{" "}
        <p className="text-2xl font-semibold pb-4 pt-8">
          The User must read this document carefully.
        </p>
        <p>
          <span className="font-semibold">Owner contact email:</span>{" "}
          adproof@email.com{" "}
        </p>
        <p>"Adproof" refers to </p>
        <ul>
          <li className="flex items-center">
            <Image src={Bullet.src} height={40} width={40} alt={""} />
            this website, including its subdomains and any other website through
            which the Owner makes its Service available;
          </li>
          <li className="flex items-center">
            <Image src={Bullet.src} height={40} width={40} alt={""} />
            applications for mobile, tablet and other smart device systems;{" "}
          </li>
          <li className="flex items-center">
            <Image src={Bullet.src} height={40} width={40} alt={""} />
            the Service;
          </li>
        </ul>
      </div>
      <div>
        <p className="text-2xl font-semibold pb-4 pt-8">
          What the User should know at a glance
        </p>
        <p className="leading-8 opacity-90 pb-4">
          The right of withdrawal on Adproof applies to all Users, including
          those Users that do not qualify as Consumers. The right of withdrawal,
          also commonly called the right of cancellation in the UK, is
          consistently referred to as “the right of withdrawal” within this
          document.
        </p>
      </div>
      <div className="leading-8 opacity-90">
        What the User should know at a glance The right of withdrawal on Adproof
        applies to all Users, including those Users that do not qualify as
        Consumers. The right of withdrawal, also commonly called the right of
        cancellation in the UK, is consistently referred to as “the right of
        withdrawal” within this document.
      </div>
      {/* ======================= */}
      <div class="hidden lg:block mx-auto">
        <div class="border-b border-t mt-16 border-gray-200 mb-4">
          <ul
            class="lg:flex justify-center lg:gap-28 flex-wrap -mb-px"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block hover:bg-[#FFB027] py-4 px-4 text-base font-semibold text-center border-transparent border-b-2"
                id="profile-tab"
                data-tabs-target="#android"
                type="button"
                role="tab"
                aria-controls="android"
                aria-selected="true"
              >
                TERMS OF USE
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block hover:bg-[#FFB027] py-4 px-4 text-base font-semibold text-center border-transparent border-b-2"
                id="dashboard-tab"
                data-tabs-target="#windows"
                type="button"
                role="tab"
                aria-controls="windows"
                aria-selected="false"
              >
                TERMS AND CONDITIONS OF SALE
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block hover:bg-[#FFB027] py-4 px-4 text-base font-semibold text-center border-transparent border-b-2"
                id="settings-tab"
                data-tabs-target="#mac"
                type="button"
                role="tab"
                aria-controls="mac"
                aria-selected="false"
              >
                USER RIGHTS
              </button>
            </li>
            <li role="presentation">
              <button
                class="inline-block hover:bg-[#FFB027] py-4 px-4 text-base font-semibold text-center border-transparent border-b-2"
                id="contacts-tab"
                data-tabs-target="#ios"
                type="button"
                role="tab"
                aria-controls="ios"
                aria-selected="false"
              >
                GUARANTEES
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class=""
            id="android"
            role="tabpanel"
            aria-labelledby="android-tab"
          >
            {/* ============================ */}
            {/* Terms */}
            <div className="py-4 justify-start items-center leading-10">
              <p className="text-2xl font-semibold py-4">TERMS OF USE</p>
              Unless otherwise specified, the terms of use detailed in this
              section apply generally when using Adproof. Single or additional
              conditions of use or access may apply in specific scenarios and in
              such cases are additionally indicated within this document. By
              using Adproof, Users confirm to meet the following requirements:
              Users must qualify as Consumers;
              <p className="text-2xl font-semibold pb-4 pt-8">
                Account registration
              </p>
              To use the Service Users must register or create a User account,
              providing all required data or information in a complete and
              truthful manner. Failure to do so will cause unavailability of the
              Service. Users are responsible for keeping their login credentials
              confidential and safe. For this reason, Users are also required to
              choose passwords that meet the highest standards of strength
              permitted by Adproof. By registering, Users agree to be fully
              responsible for all activities that occur under their username and
              password. Users are required to immediately and unambiguously
              inform the Owner via the contact details indicated in this
              document, if they think their personal information, including but
              not limited to User accounts, access credentials or personal data,
              have been violated, unduly disclosed or stolen.
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Conditions for account registration
              </p>{" "}
              Registration of User accounts on Adproof is subject to the
              conditions outlined below. By registering, Users agree to meet
              such conditions. Accounts registered by bots or any other
              automated methods are not permitted. Unless otherwise specified,
              each User must register only one account. Unless explicitly
              permitted, a User account may not be shared with other persons.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Account termination
              </p>{" "}
              Users can terminate their account and stop using the Service
              subject to the conditions and according to the procedures outlined
              in the relevant section of Adproof.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Account suspension and deletion
              </p>{" "}
              The Owner reserves the right, at its sole discretion, to suspend
              or delete at any time and without notice, User accounts which it
              deems inappropriate, offensive or in violation of these Terms. The
              suspension or deletion of User accounts shall not entitle Users to
              any claims for compensation, damages or reimbursement. The
              suspension or deletion of accounts due to causes attributable to
              the User does not exempt the User from paying any applicable fees
              or prices.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Content on Adproof
              </p>{" "}
              Unless where otherwise specified or clearly recognizable, all
              content available on Adproof is owned or provided by the Owner or
              its licensors. The Owner undertakes its utmost effort to ensure
              that the content provided on Adproof infringes no applicable legal
              provisions or third-party rights. However, it may not always be
              possible to achieve such a result. In such cases, without
              prejudice to any legal prerogatives of Users to enforce their
              rights, Users are kindly asked to preferably report related
              complaints using the contact details provided in this document.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Access to external resources
              </p>{" "}
              Through Adproof Users may have access to external resources
              provided by third parties. Users acknowledge and accept that the
              Owner has no control over such resources and is therefore not
              responsible for their content and availability. Conditions
              applicable to any resources provided by third parties, including
              those applicable to any possible grant of rights in content,
              result from each such third parties’ terms and conditions or, in
              the absence of those, applicable statutory law.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Acceptable use
              </p>{" "}
              Adproof and the Service may only be used within the scope of what
              they are provided for, under these Terms and applicable law. Users
              are solely responsible for making sure that their use of Adproof
              and/or the Service violates no applicable law, regulations or
              third-party rights. Therefore, the Owner reserves the right to
              take any appropriate measure to protect its legitimate interests
              including by denying Users access to Adproof or the Service,
              terminating contracts, reporting any misconduct performed through
              Adproof or the Service to the competent authorities – such as
              judicial or administrative authorities - whenever Users engage or
              are suspected to engage in any of the following activities:
              violate laws, regulations and/or these Terms; infringe any
              third-party rights; considerably impair the Owner’s legitimate
              interests; offend the Owner or any third party.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Software license
              </p>{" "}
              Any intellectual or industrial property rights, and any other
              exclusive rights on software or technical applications embedded in
              or related to Adproof are held by the Owner and/or its licensors.
              Subject to Users’ compliance with and notwithstanding any
              divergent provision of these Terms, the Owner merely grants Users
              a revocable, non-exclusive, non-sublicensable and non-transferable
              license to use the software and/or any other technical means
              embedded in the Service within the scope and for the purposes of
              Adproof and the Service offered. This license does not grant Users
              any rights to access, usage or disclosure of the original source
              code. All techniques, algorithms, and procedures contained in the
              software and any documentation thereto related is the Owner’s or
              its licensors’ sole property. All rights and license grants to
              Users shall immediately terminate upon any termination or
              expiration of the Agreement. Without prejudice to the above, under
              this license Users may download, install, use and run the software
              on the permitted number of devices, provided that such devices are
              common and up-to-date in terms of technology and market standards.
              The Owner reserves the right to release updates, fixes and further
              developments of Adproof and/or its related software and to provide
              them to Users for free. Users may need to download and install
              such updates to continue using Adproof and/or its related
              software. New releases may only be available against payment of a
              fee. The User may download, install, use and run the software on
              unlimited devices. However, it may not be permitted to run the
              software on more than one device at a time.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                API usage terms
              </p>{" "}
              Users may access their data relating to Adproof via the
              Application Program Interface (API). Any use of the API, including
              use of the API through a third-party product/service that accesses
              Adproof, is bound by these Terms and, in addition, by the
              following specific terms: the User expressly understands and
              agrees that the Owner bears no responsibility and shall not be
              held liable for any damages or losses resulting from the User’s
              use of the API or their use of any third-party products/services
              that access data through the API.
            </div>
            {/* Terms */}
            {/* ============================ */}
          </div>
          <div
            class="hidden"
            id="windows"
            role="tabpanel"
            aria-labelledby="windows-tab"
          >
            {/* ============================ */}
            {/* Conditions of sale */}
            <div className="py-4 justify-start items-center leading-10">
              <p className="text-2xl font-semibold py-4">
                TERMS AND CONDITIONS OF SALE
              </p>{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Paid Products
              </p>{" "}
              Some of the Products provided on Adproof, as part of the Service,
              are provided on the basis of payment. The fees, duration and
              conditions applicable to the purchase of such Products are
              described below and in the dedicated sections of Adproof.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Product description
              </p>{" "}
              Prices, descriptions or availability of Products are outlined in
              the respective sections of Adproof and are subject to change
              without notice. While Products on Adproof are presented with the
              greatest accuracy technically possible, representation on Adproof
              through any means (including, as the case may be, graphic
              material, images, colors, sounds) is for reference only and
              implies no warranty as to the characteristics of the purchased
              Product. The characteristics of the chosen Product will be
              outlined during the purchasing process.
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Purchasing process
              </p>{" "}
              Any steps taken from choosing a Product to order submission form
              part of the purchasing process. The purchasing process includes
              these steps: By clicking on the checkout button, Users open the
              Stripe checkout section, wherein they will have to specify their
              contact details and a payment method of their choice. After
              providing all the required information, Users must carefully
              review the order and, subsequently, confirm and submit it by using
              the relevant button or mechanism on Adproof, hereby accepting
              these Terms and committing to pay the agreed-upon price. All
              notifications related to the described purchasing process shall be
              sent to the email address provided by the User for such purposes.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">Prices</p>
              Users are informed during the purchasing process and before order
              submission, about any fees, taxes and costs (including, if any,
              delivery costs) that they will be charged. Prices on Adproof are
              displayed: including all applicable fees, taxes and costs;{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Offers and discounts
              </p>{" "}
              The Owner may offer discounts or provide special offers for the
              purchase of Products. Any such offer or discount shall always be
              subject to the eligibility criteria and the terms and conditions
              set out in the corresponding section of Adproof. Offers and
              discounts are always granted at the Owner’s sole discretion.
              Repeated or recurring offers or discounts create no claim/title or
              right that Users may enforce in the future. Depending on the case,
              discounts or offers shall be valid for a limited time only or
              while stocks last. If an offer or discount is limited by time, the
              time indications refer to the time zone of the Owner, as indicated
              in the Owner’s location details in this document, unless otherwise
              specified.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Methods of payment
              </p>{" "}
              Information related to accepted payment methods are made available
              during the purchasing process. Some payment methods may only be
              available subject to additional conditions or fees. In such cases
              related information can be found in the dedicated section of
              Adproof. All payments are independently processed through
              third-party services. Therefore, Adproof does not collect any
              payment information – such as credit card details – but only
              receives a notification once the payment has been successfully
              completed. If payment through the available methods fail or is
              refused by the payment service provider, the Owner shall be under
              no obligation to fulfil the purchase order. Any possible costs or
              fees resulting from the failed or refused payment shall be borne
              by the User.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Purchase via app store
              </p>{" "}
              Adproof or specific Products available for sale on Adproof must be
              purchased via a third-party app store. To access such purchases,
              Users must follow the instructions provided on the relevant online
              store (such as "Apple App Store" or "Google Play"), which may vary
              depending on the particular device in use. Unless otherwise
              specified, purchases done via third-party online stores are also
              subject to such third-parties’ terms and conditions, which, in
              case of any inconsistency or conflict, shall always prevail upon
              these Terms. Users purchasing through such third-party online
              stores must therefore read such terms and conditions of sale
              carefully and accept them.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Retention of usage rights
              </p>{" "}
              Users do not acquire any rights to use the purchased Product until
              the total purchase price is received by the Owner.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">Delivery</p>{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Performance of services
              </p>
              The purchased service shall be performed or made available within
              the timeframe specified on Adproof or as communicated before the
              order submission.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Contract duration
              </p>{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Trial period
              </p>{" "}
              Users have the option to test Adproof or selected Products during
              a limited and non-renewable trial period, at no cost. Some
              features or functions of Adproof may not be available to Users
              during the trial period. Further conditions applicable to the
              trial period, including its duration, will be specified on
              Adproof. The trial period shall automatically convert into the
              equivalent paid Product, unless the User cancels the purchase
              before the trial period expires.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Subscriptions
              </p>
              Subscriptions allow Users to receive a Product continuously or
              regularly over a determined period of time. Paid subscriptions
              begin on the day the payment is received by the Owner. In order to
              maintain subscriptions, Users must pay the required recurring fee
              in a timely manner. Failure to do so may cause service
              interruptions.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Fixed-term subscriptions
              </p>{" "}
              Paid fixed-term subscriptions start on the day the payment is
              received by the Owner and last for the subscription period chosen
              by the User or otherwise specified during the purchasing process.
              Once the subscription period expires, the Product shall no longer
              be accessible, unless the User renews the subscription by paying
              the relevant fee. Fixed-term subscriptions may not be terminated
              prematurely and shall run out upon expiration of the subscription
              term.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Automatic renewal
              </p>{" "}
              Subscriptions are automatically renewed through the payment method
              that the User chose during purchase, unless the User cancels the
              subscription within the deadlines for termination specified in the
              relevant section of these Terms and/or Adproof. The renewed
              subscription will last for a period equal to the original term.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Termination
              </p>{" "}
              Recurring subscriptions may be terminated at any time by sending a
              clear and unambiguous termination notice to the Owner using the
              contact details provided in this document, or — if applicable — by
              using the corresponding controls inside Adproof.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Termination notice
              </p>{" "}
              If the notice of termination is received by the Owner before the
              subscription renews, the termination shall take effect as soon as
              the current period is completed.
            </div>
            {/* Conditions of sale */}
            {/* ============================ */}
          </div>
          <div
            class="hidden"
            id="mac"
            role="tabpanel"
            aria-labelledby="mac-tab"
          >
            {/* ============================ */}
            {/* User Rights */}
            <div className="py-4 justify-start items-center leading-10">
              <p className="text-2xl font-semibold py-4">USER RIGHTS</p>
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Right of withdrawal
              </p>{" "}
              Unless exceptions apply, the User may be eligible to withdraw from
              the contract within the period specified below (generally 14
              days), for any reason and without justification. Users can learn
              more about the withdrawal conditions within this section.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Who the right of withdrawal applies to{" "}
              </p>
              The right of withdrawal is a right designed for European Consumers
              in the case of distance contracts (because the User is not able to
              see or try the Products before closing the contract). Withdrawal
              from the contract terminates the obligation of the contracting
              parties to perform the contract. On Adproof the right of
              withdrawal applies to all Users. Unless any exception mentioned
              below applies, if any, Users have a right to withdraw from the
              contract within the specified period applicable to their case, for
              any reason and without justification.
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Exercising the right of withdrawal
              </p>{" "}
              To exercise their right of withdrawal, Users must send to the
              Owner an unequivocal statement of their intention to withdraw from
              the contract. To this end, Users may use the model withdrawal form
              available from within the “definitions” section of this document.
              Users are, however, free to express their intention to withdraw
              from the contract by making an unequivocal statement in any other
              suitable way. In order to meet the deadline within which they can
              exercise such right, Users must send the withdrawal notice before
              the withdrawal period expires. When does the withdrawal period
              expire? Regarding the purchase of a service, the withdrawal period
              expires 14 days after the day that the contract is entered into,
              unless the User has waived the withdrawal right.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Effects of withdrawal
              </p>{" "}
              Users who correctly withdraw from a contract will be reimbursed by
              the Owner for all payments made to the Owner, including, if any,
              those covering the costs of delivery. However, any additional
              costs resulting from the choice of a particular delivery method
              other than the least expensive type of standard delivery offered
              by the Owner, will not be reimbursed. Such reimbursement shall be
              made without undue delay and, in any event, no later than 14 days
              from the day on which the Owner is informed of the User’s decision
              to withdraw from the contract. Unless otherwise agreed with the
              User, reimbursements will be made using the same means of payment
              as used to process the initial transaction. In any event, the User
              shall not incur any costs or fees as a result of such
              reimbursement.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                …on the purchase of services
              </p>{" "}
              Where a User exercises the right of withdrawal after having
              requested that the service be performed before the withdrawal
              period expires, the User shall pay to the Owner an amount which is
              in proportion to the part of service provided. Such payment shall
              be calculated based on the fee contractually agreed upon, and be
              proportional to the part of service provided until the time the
              User withdraws, compared with the full coverage of the contract.
            </div>
            {/* User Rights */}
            {/* ============================ */}
          </div>
          <div
            class="hidden"
            id="ios"
            role="tabpanel"
            aria-labelledby="ios-tab"
          >
            {/* ..... */}
            {/* ============================ */}
            {/* Guarantees */}
            <div className="py-4 justify-start items-center leading-10">
              <p className="text-2xl font-semibold py-4">GUARANTEES</p>{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Money-back-guarantee
              </p>{" "}
              Without prejudice to any applicable statutory rights, the Owner
              grants Users the right to cancel a purchase they are unsatisfied
              with and obtain a refund. The terms and conditions applicable to
              such offer can be found in the dedicated section of Adproof.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Liability and indemnification{" "}
              </p>
              <p className="text-2xl font-semibold pt-8 opacity-90">US Users</p>{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Disclaimer of Warranties{" "}
              </p>
              Adproof is provided strictly on an “as is” and “as available”
              basis. Use of the Service is at Users’ own risk. To the maximum
              extent permitted by applicable law, the Owner expressly disclaims
              all conditions, representations, and warranties — whether express,
              implied, statutory or otherwise, including, but not limited to,
              any implied warranty of merchantability, fitness for a particular
              purpose, or non-infringement of third-party rights. No advice or
              information, whether oral or written, obtained by user from owner
              or through the Service will create any warranty not expressly
              stated herein. Without limiting the foregoing, the Owner, its
              subsidiaries, affiliates, licensors, officers, directors, agents,
              co-branders, partners, suppliers and employees do not warrant that
              the content is accurate, reliable or correct; that the Service
              will meet Users’ requirements; that the Service will be available
              at any particular time or location, uninterrupted or secure; that
              any defects or errors will be corrected; or that the Service is
              free of viruses or other harmful components. Any content
              downloaded or otherwise obtained through the use of the Service is
              downloaded at users own risk and users shall be solely responsible
              for any damage to Users’ computer system or mobile device or loss
              of data that results from such download or Users’ use of the
              Service. The Owner does not warrant, endorse, guarantee, or assume
              responsibility for any product or service advertised or offered by
              a third party through the Service or any hyperlinked website or
              service, and the Owner shall not be a party to or in any way
              monitor any transaction between Users and third-party providers of
              products or services. The Service may become inaccessible or it
              may not function properly with Users’ web browser, mobile device,
              and/or operating system. The owner cannot be held liable for any
              perceived or actual damages arising from Service content,
              operation, or use of this Service. Federal law, some states, and
              other jurisdictions, do not allow the exclusion and limitations of
              certain implied warranties. The above exclusions may not apply to
              Users. This Agreement gives Users specific legal rights, and Users
              may also have other rights which vary from state to state. The
              disclaimers and exclusions under this agreement shall not apply to
              the extent prohibited by applicable law.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Limitations of liability
              </p>{" "}
              To the maximum extent permitted by applicable law, in no event
              shall the Owner, and its subsidiaries, affiliates, officers,
              directors, agents, co-branders, partners, suppliers and employees
              be liable for any indirect, punitive, incidental, special,
              consequential or exemplary damages, including without limitation
              damages for loss of profits, goodwill, use, data or other
              intangible losses, arising out of or relating to the use of, or
              inability to use, the Service; and any damage, loss or injury
              resulting from hacking, tampering or other unauthorized access or
              use of the Service or User account or the information contained
              therein; any errors, mistakes, or inaccuracies of content;
              personal injury or property damage, of any nature whatsoever,
              resulting from User access to or use of the Service; any
              unauthorized access to or use of the Owner’s secure servers and/or
              any and all personal information stored therein; any interruption
              or cessation of transmission to or from the Service; any bugs,
              viruses, trojan horses, or the like that may be transmitted to or
              through the Service; any errors or omissions in any content or for
              any loss or damage incurred as a result of the use of any content
              posted, emailed, transmitted, or otherwise made available through
              the Service; and/or the defamatory, offensive, or illegal conduct
              of any User or third party. In no event shall the Owner, and its
              subsidiaries, affiliates, officers, directors, agents,
              co-branders, partners, suppliers and employees be liable for any
              claims, proceedings, liabilities, obligations, damages, losses or
              costs in an amount exceeding the amount paid by User to the Owner
              hereunder in the preceding 12 months, or the period of duration of
              this agreement between the Owner and User, whichever is shorter.
              This limitation of liability section shall apply to the fullest
              extent permitted by law in the applicable jurisdiction whether the
              alleged liability is based on contract, tort, negligence, strict
              liability, or any other basis, even if company has been advised of
              the possibility of such damage. Some jurisdictions do not allow
              the exclusion or limitation of incidental or consequential
              damages, therefore the above limitations or exclusions may not
              apply to User. The terms give User specific legal rights, and User
              may also have other rights which vary from jurisdiction to
              jurisdiction. The disclaimers, exclusions, and limitations of
              liability under the terms shall not apply to the extent prohibited
              by applicable law.
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Indemnification{" "}
              </p>
              The User agrees to defend, indemnify and hold the Owner and its
              subsidiaries, affiliates, officers, directors, agents,
              co-branders, partners, suppliers and employees harmless from and
              against any and all claims or demands, damages, obligations,
              losses, liabilities, costs or debt, and expenses, including, but
              not limited to, legal fees and expenses, arising from User’s use
              of and access to the Service, including any data or content
              transmitted or received by User; User’s violation of these terms,
              including, but not limited to, User’s breach of any of the
              representations and warranties set forth in these terms; User’s
              violation of any third-party rights, including, but not limited
              to, any right of privacy or intellectual property rights; User’s
              violation of any statutory law, rule, or regulation; any content
              that is submitted from User’s account, including third party
              access with User’s unique username, password or other security
              measure, if applicable, including, but not limited to, misleading,
              false, or inaccurate information; User’s wilful misconduct; or
              statutory provision by User or its affiliates, officers,
              directors, agents, co-branders, partners, suppliers and employees
              to the extent allowed by applicable law.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Common provisions
              </p>{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                No Waiver
              </p>{" "}
              The Owner’s failure to assert any right or provision under these
              Terms shall not constitute a waiver of any such right or
              provision. No waiver shall be considered a further or continuing
              waiver of such term or any other term.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Service interruption
              </p>{" "}
              To ensure the best possible service level, the Owner reserves the
              right to interrupt the Service for maintenance, system updates or
              any other changes, informing the Users appropriately. Within the
              limits of law, the Owner may also decide to suspend or terminate
              the Service altogether. If the Service is terminated, the Owner
              will cooperate with Users to enable them to withdraw Personal Data
              or information in accordance with applicable law. Additionally,
              the Service might not be available due to reasons outside the
              Owner’s reasonable control, such as “force majeure” (eg. labor
              actions, infrastructural breakdowns or blackouts etc).{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Service reselling
              </p>
              Users may not reproduce, duplicate, copy, sell, resell or exploit
              any portion of Adproof and of its Service without the Owner’s
              express prior written permission, granted either directly or
              through a legitimate reselling programme.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Privacy policy
              </p>{" "}
              To learn more about the use of their Personal Data, Users may
              refer to the privacy policy of Adproof.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Intellectual property rights
              </p>{" "}
              Without prejudice to any more specific provision of these Terms,
              any intellectual property rights, such as copyrights, trademark
              rights, patent rights and design rights related to Adproof are the
              exclusive property of the Owner or its licensors and are subject
              to the protection granted by applicable laws or international
              treaties relating to intellectual property. All trademarks —
              nominal or figurative — and all other marks, trade names, service
              marks, word marks, illustrations, images, or logos appearing in
              connection with Adproof are, and remain, the exclusive property of
              the Owner or its licensors and are subject to the protection
              granted by applicable laws or international treaties related to
              intellectual property.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Changes to these Terms{" "}
              </p>
              The Owner reserves the right to amend or otherwise modify these
              Terms at any time. In such cases, the Owner will appropriately
              inform the User of these changes. Such changes will only affect
              the relationship with the User for the future. The continued use
              of the Service will signify the User’s acceptance of the revised
              Terms. If Users do not wish to be bound by the changes, they must
              stop using the Service. Failure to accept the revised Terms, may
              entitle either party to terminate the Agreement. The applicable
              previous version will govern the relationship prior to the User's
              acceptance. The User can obtain any previous version from the
              Owner.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Assignment of contract
              </p>{" "}
              The Owner reserves the right to transfer, assign, dispose of by
              novation, or subcontract any or all rights or obligations under
              these Terms, taking the User’s legitimate interests into account.
              Provisions regarding changes of these Terms will apply
              accordingly. Users may not assign or transfer their rights or
              obligations under these Terms in any way, without the written
              permission of the Owner.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">Contacts</p>{" "}
              All communications relating to the use of Adproof must be sent
              using the contact information stated in this document.
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Severability
              </p>{" "}
              Should any provision of these Terms be deemed or become invalid or
              unenforceable under applicable law, the invalidity or
              unenforceability of such provision shall not affect the validity
              of the remaining provisions, which shall remain in full force and
              effect.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">US Users</p>{" "}
              Any such invalid or unenforceable provision will be interpreted,
              construed and reformed to the extent reasonably required to render
              it valid, enforceable and consistent with its original intent.
              These Terms constitute the entire Agreement between Users and the
              Owner with respect to the subject matter hereof, and supersede all
              other communications, including but not limited to all prior
              agreements, between the parties with respect to such subject
              matter. These Terms will be enforced to the fullest extent
              permitted by law.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Governing law
              </p>{" "}
              These Terms are governed by the law of the place where the Owner
              is based, as disclosed in the relevant section of this document,
              without regard to conflict of laws principles.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Venue of jurisdiction
              </p>{" "}
              The exclusive competence to decide on any controversy resulting
              from or connected to these Terms lies with the courts of the place
              where the Owner is based, as displayed in the relevant section of
              this document.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">US Users</p>{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Surviving provisions
              </p>{" "}
              This Agreement shall continue in effect until it is terminated by
              either Adproof or the User. Upon termination, the provisions
              contained in these Terms that by their context are intended to
              survive termination or expiration will survive, including but not
              limited to the following: the User’s grant of licenses under these
              Terms shall survive indefinitely; the User’s indemnification
              obligations shall survive for a period of five years from the date
              of termination; the disclaimer of warranties and representations,
              and the stipulations under the section containing indemnity and
              limitation of liability provisions, shall survive indefinitely.{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Dispute resolution
              </p>{" "}
              <p className="text-2xl font-semibold pt-8 opacity-90">
                Amicable dispute resolution
              </p>{" "}
              Users may bring any disputes to the Owner who will try to resolve
              them amicably. While Users' right to take legal action shall
              always remain unaffected, in the event of any controversy
              regarding the use of Adproof or the Service, Users are kindly
              asked to contact the Owner at the contact details provided in this
              document. The User may submit the complaint including a brief
              description and if applicable, the details of the related order,
              purchase, or account, to the Owner’s email address specified in
              this document. The Owner will process the complaint without undue
              delay and within 2 days of receiving it.
            </div>
            {/* Guarantees */}
            {/* ============================ */}
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
      {/* ======================= */}{" "}
    </div>
  );
};

export default TermsOfServiceBody;
