"use strict";
let Promise = require("bluebird");
let nodeMailer = require("nodemailer");

module.exports = {
  sendSubscribeMail: sendSubscribeMail,
  mailsend: mailsend,
};

function sendSubscribeMail(auth, data, cb) {
  let name = data.token.card.name ? data.token.card.name : 'User';
  const message = {
    from: `App <noreply@myserver.com>`,
    to: data.token.email,
    subject: `Subscription plan ` + data.plan_type + ` | IMAGEMARK`,
    html:
      `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-->
      <!--<![endif]-->
      <style type="text/css">
        body {
          margin: 0;
          padding: 0;
        }
    
        table,
        td,
        tr {
          vertical-align: top;
          border-collapse: collapse;
        }
    
        * {
          line-height: inherit;
        }
    
        a[x-apple-data-detectors=true] {
          color: inherit !important;
          text-decoration: none !important;
        }
      </style>
      <style type="text/css" id="media-query">
        @media (max-width: 625px) {
    
          .block-grid,
          .col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
    
          .block-grid {
            width: 100% !important;
          }
    
          .col {
            width: 100% !important;
          }
    
          .col>div {
            margin: 0 auto;
          }
    
          img.fullwidth,
          img.fullwidthOnMobile {
            max-width: 100% !important;
          }
    
          .no-stack .col {
            min-width: 0 !important;
            display: table-cell !important;
          }
    
          .no-stack.two-up .col {
            width: 50% !important;
          }
    
          .no-stack .col.num4 {
            width: 33% !important;
          }
    
          .no-stack .col.num8 {
            width: 66% !important;
          }
    
          .no-stack .col.num4 {
            width: 33% !important;
          }
    
          .no-stack .col.num3 {
            width: 25% !important;
          }
    
          .no-stack .col.num6 {
            width: 50% !important;
          }
    
          .no-stack .col.num9 {
            width: 75% !important;
          }
    
          .video-block {
            max-width: none !important;
          }
    
          .mobile_hide {
            min-height: 0px;
            max-height: 0px;
            max-width: 0px;
            display: none;
            overflow: hidden;
            font-size: 0px;
          }
    
          .desktop_hide {
            display: block !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    
    <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f1f4f8;">
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f1f4f8; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#f1f4f8" valign="top">
        <tbody>
          <tr style="vertical-align: top;" valign="top">
            <td style="word-break: break-word; vertical-align: top;" valign="top">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f1f4f8"><![endif]-->
              <div style="background-color:transparent;">
                <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 605px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="605" style="background-color:transparent;width:605px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div class="col num12" style="min-width: 320px; max-width: 605px; display: table-cell; vertical-align: top; width: 605px;">
                      <div style="width:100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
                          <div class="mobile_hide">
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 605px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="605" style="background-color:#ffffff;width:605px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 1px solid #F3F2F3; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div class="col num12" style="min-width: 320px; max-width: 605px; display: table-cell; vertical-align: top; width: 605px;">
                      <div style="width:100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:1px solid #F3F2F3; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
                          <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                    <tbody>
                                      <tr style="vertical-align: top;" valign="top">
                                        <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div class="img-container center autowidth" align="center" style="padding-right: 20px;padding-left: 20px;">
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 20px;padding-left: 20px;" align="center"><![endif]-->
                            <div style="font-size:1px;line-height:20px">&nbsp;</div><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-oum9pf7o6t7/IMP_Logo.png" alt="Image" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 305px; display: block;" width="305">
                            <div style="font-size:1px;line-height:20px">&nbsp;</div>
                            <!--[if mso]></td></tr></table><![endif]-->
                          </div>
                          <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 18px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                    <tbody>
                                      <tr style="vertical-align: top;" valign="top">
                                        <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 605px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="605" style="background-color:#ffffff;width:605px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div class="col num12" style="min-width: 320px; max-width: 605px; display: table-cell; vertical-align: top; width: 605px;">
                      <div style="width:100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
                          <div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;">
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/906/Thanks.png" alt="I'm an image" title="I'm an image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 453px; display: block;" width="453">
                            <!--[if mso]></td></tr></table><![endif]-->
                          </div>
                          <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                    <tbody>
                                      <tr style="vertical-align: top;" valign="top">
                                        <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 20px; padding-bottom: 15px; font-family: Tahoma, sans-serif"><![endif]-->
                          <div style="color:#555555;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:15px;padding-left:40px;">
                            <div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
                              <p style="font-size: 46px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 55px; margin: 0;"><span style="font-size: 46px; color: #003188;"><strong>Welcome to IMAGEMARK</strong></span></p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 15px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                          <div style="color:#555555;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:15px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
                            <div style="line-height: 1.5; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 12px; color: #555555; mso-line-height-alt: 18px;">
                              <p style="font-size: 16px; line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #000000;">Hi `+ name +`,</span></p>
                              <p style="font-size: 12px; line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: 18px; margin: 0;">&nbsp;</p>
                              <p style="font-size: 16px; line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #000000;">Thank you for using the ` + data.plan_type + `! We've successfully processed your payment of ` +data.amount +`.</span></p>
                              <p style="font-size: 12px; line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: 18px; margin: 0;">&nbsp;</p>
                              <p style="font-size: 12px; line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: 18px; margin: 0;"><span style="color: #000000;">&nbsp;</span></p>
                              <p style="line-height: 1.5; font-family: inherit; word-break: break-word; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #000000;">You can access your subcription information from <a style="text-decoration: underline;" href="https://enigmatic-castle-16752.herokuapp.com" target="_blank" rel="noopener">your setting page</a>. If</span></p>
                              <p style="line-height: 1.5; font-family: inherit; word-break: break-word; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #000000;">you have any further questions please visit out <a style="text-decoration: underline;" href="https://enigmatic-castle-16752.herokuapp.com" target="_blank" rel="noopener">help center</a> or <a style="text-decoration: underline;" href="https://enigmatic-castle-16752.herokuapp.com" target="_blank" rel="noopener">contact</a></span></p>
                              <p style="line-height: 1.5; font-family: inherit; word-break: break-word; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #000000;"><a style="text-decoration: underline;" href="https://enigmatic-castle-16752.herokuapp.com" target="_blank" rel="noopener">support</a>.</span></p>
                              <p style="font-size: 12px; line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: 18px; margin: 0;">&nbsp;</p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                    <tbody>
                                      <tr style="vertical-align: top;" valign="top">
                                        <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 20px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
                          <div style="color:#555555;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:20px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
                            <div style="line-height: 1.5; font-size: 12px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;">
                              <p style="line-height: 1.5; word-break: break-word; font-family: inherit; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #6d89bc;">Happy Team,</span></p>
                              <p style="line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: NaNpx; margin: 0;"><span style="color: #6d89bc;"><span style="font-size: 16px;">ImageMark</span></span></p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                    <tbody>
                                      <tr style="vertical-align: top;" valign="top">
                                        <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 605px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="605" style="background-color:#ffffff;width:605px; border-top: 1px solid #E5EAF3; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div class="col num12" style="min-width: 320px; max-width: 605px; display: table-cell; vertical-align: top; width: 605px;">
                      <div style="width:100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top:1px solid #E5EAF3; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
                          <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 35px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                    <tbody>
                                      <tr style="vertical-align: top;" valign="top">
                                        <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div class="img-container center fixedwidth" align="center" style="padding-right: 20px;padding-left: 20px;">
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 20px;padding-left: 20px;" align="center"><![endif]-->
                            <div style="font-size:1px;line-height:20px">&nbsp;</div><img class="center fixedwidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/544019_525111/IMP_Logo.png" alt="Image" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 181px; display: block;" width="181">
                            <div style="font-size:1px;line-height:15px">&nbsp;</div>
                            <!--[if mso]></td></tr></table><![endif]-->
                          </div>
                          <table class="social_icons" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                  <table class="social_table" align="center" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
                                    <tbody>
                                      <tr style="vertical-align: top; display: inline-block; text-align: center;" align="center" valign="top">
                                        <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-blue/facebook@2x.png" alt="Facebook" title="Facebook" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td>
                                        <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="https://twitter.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-blue/twitter@2x.png" alt="Twitter" title="Twitter" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td>
                                        <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="https://instagram.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-blue/instagram@2x.png" alt="Instagram" title="Instagram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td>
                                        <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="https://www.linkedin.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-blue/linkedin@2x.png" alt="LinkedIn" title="LinkedIn" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                            <tbody>
                              <tr style="vertical-align: top;" valign="top">
                                <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 40px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                    <tbody>
                                      <tr style="vertical-align: top;" valign="top">
                                        <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 605px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="605" style="background-color:transparent;width:605px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div class="col num12" style="min-width: 320px; max-width: 605px; display: table-cell; vertical-align: top; width: 605px;">
                      <div style="width:100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
                          <div class="mobile_hide">
                            <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
                              <tbody>
                                <tr style="vertical-align: top;" valign="top">
                                  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
                                    <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" align="center" role="presentation" valign="top">
                                      <tbody>
                                        <tr style="vertical-align: top;" valign="top">
                                          <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
    </body>
    </html>`,
  };

  return this.mailsendAsync(auth, message)
    .then(() => {
      cb();
    })
    .catch((e) => cb(e));
}

function mailsend(auth, message, cb) {
  var transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: auth.email,
      pass: auth.password,
    },
  });

  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log("sendMail---err", err);
    }
    cb();
  });
}

Promise.promisifyAll(module.exports);
