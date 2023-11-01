import React from "react";
import classes from "./tnc.module.scss";

function tnc() {
  return (
    <div className={classes.container}>
      <div className={`row`}>
        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12`}>
          <h5 className={classes.heading}>Terms and conditions:</h5>
          <p className={classes.desc}>
            Here are the terms and conditions for the website Ralikson, which is
            in the real estate, home services, and construction material selling
            business, as well as a platform for professionals:
          </p>
          <ol className={classes.list}>
            <li>
              Introduction: These terms and conditions govern your use of the
              Ralikson website. By using our website, you accept these terms and
              conditions in full. If you disagree with these terms and
              conditions or any part of these terms and conditions, you must not
              use our website.
            </li>
            <li>
              License to use website: Unless otherwise stated, Ralikson owns the
              intellectual property rights in the website and material on the
              website. Subject to the license below, all these intellectual
              property rights are reserved.
            </li>
            <li>
              Acceptable use: You must not use our website in any way that
              causes, or may cause, damage to the website or impairment of the
              availability or accessibility of the website; or in any way which
              is unlawful, illegal, fraudulent or harmful, or in connection with
              any unlawful, illegal, fraudulent or harmful purpose or activity.
            </li>
            <li>
              User content: In these terms and conditions, “your user content”
              means material (including without limitation text, images, audio
              material, video material and audio-visual material) that you
              submit to our website, for whatever purpose. You grant to Ralikson
              a worldwide, irrevocable, non-exclusive, royalty-free license to
              use, reproduce, adapt, publish, translate and distribute your user
              content in any existing or future media.
            </li>
            <li>
              No warranties: This website is provided “as is” without any
              representations or warranties, express or implied. Ralikson makes
              no representations or warranties in relation to this website or
              the information and materials provided on this website.
            </li>
            <li>
              Limitations of liability: Ralikson will not be liable to you
              (whether under the law of contact, the law of torts or otherwise)
              in relation to the contents of, or use of, or otherwise in
              connection with this website.
            </li>
            <li>
              Indemnity: You hereby indemnify Ralikson and undertake to keep
              Ralikson indemnified against any losses, damages, costs,
              liabilities and expenses (including without limitation legal
              expenses and any amounts paid by Ralikson to a third party in
              settlement of a claim or dispute on the advice of Ralikson’s legal
              advisers) incurred or suffered by Ralikson arising out of any
              breach by you of any provision of these terms and conditions.
            </li>
            <li>
              Breaches of these terms and conditions: Without prejudice to
              Ralikson’s other rights under these terms and conditions if you
              breach these terms and conditions in any way Ralikson may take
              such action as Ralikson deems appropriate to deal with the breach
              including suspending your access to the website prohibiting you
              from accessing the website blocking computers using your IP
              address from accessing the website contacting any or all of your
              internet service providers and requesting that they block your
              access to the website and/or bringing court proceedings against
              you.
            </li>
            <li>
              Variation: Ralikson may revise these terms and conditions from
              time-to-time. Revised terms and conditions shall apply to the use
              of our website from the date of publication of the revised terms
              and conditions on our website.
            </li>
            <li>
              Entire agreement: These terms and conditions together with our
              privacy policy constitute the entire agreement between you and
              Ralikson in relation to your use of our website and supersede all
              previous agreements in respect of your use of this website.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default tnc;
