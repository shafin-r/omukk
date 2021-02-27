# Notre Dame College Website Suggestions

This document contains all current details and security vulnerabilities as well as the limitations of the current NDC Website. It also contains suggestions which can improve website performance and security. 

N.B. This document does not discuss about any financial situation intentionally. A different report needs to be created for that purpose.

## Current Status

**Website Type:** Website
**Programming Language:**  PHP
**Framework:** Wordpress
**Wordpress Theme:** Proto
**Hosting Service Provider:** CyrusOne LLC
**SSL Certificate Issuer:** Let's Encrypt



Though from the above data, it is not easy to understand what type of performance or security issue is present in the college website. So at this point, we will break the problems into categories and discuss them one by one.

### Performance Issues

* The major performance issue NDC Website faces is server being down when there is an increased amount of website traffic. When this issue occurs, it happens because of bad services provided by the hosting service provider (or because of a DDOS attack <small>which will be discussed later</small>). 
  We have researched about the hosting service provider of NDC Website. As said previously, the provider is **CyrusOne LLC**. Since the NDC websites has been down multiple times recently, we decided to have a deep look into the hosting provider. Though being a well established connectivity provider they are not a good cloud service provider *for an individual entity*. As per their website, they connect their cloud service consumers to IBM, Google Cloud, AWS etc. So bascially, Notre Dame College is having CyrusOne LLC as a middleman to connect with some other cloud service provider. 
* After researching about the hosting provider, we decided to gather information about the Domain service provider. Though domain does not affect website performance much but a domain name server plays a vital role to speed up website's loading speed. At first we thought, Notre Dame College has bought their `notredamecollege-dhaka.com` domain from some **website-welcome.com**. Apparently, we found out that, the site has been registered under the name of an individual personnel, who does not belong to NDC authority. And the domain name server is websitewelcome.com instead of personalized by the registrar.
  This yet does not hamper site's performance, but it should be noted that Notre Dame College's website domain is not registered under the name of Notre Dame College.
* After logging into the website, we can see the landing page. The whole website is made with wordpress where the theme is **Proto**. Even after using a built in theme, the site css is not optimized. And some transitions in photo album does annoy users.
  Wordpress sites are common and is being used by website developers worldwide. But it is to be kept in mind that the themes are not for direct use and need to be modified according to the organization's need. But the current website developers kept everything as it is, making the theme features futile.
  For example, the footer of the website contains a lot of hyperlinks referring to `#` which is of no work. There is a **Advanced Search** option and also a **subscription form** which are not set up (and obviously does confuse website users).
  The stylesheet of the website is very inefficient. With weird sizing and random transitions, it does not create anything but an awkward situation for the viewers. Random cumulative layout shifts take website's rating to a lower position.

![PageSpeed Report](https://i.postimg.cc/rm4XC7st/Untitled.png)

Above is the PageSpeed report for the college website. Click [this link](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fnotredamecollege-dhaka.com&tab=mobile) for more details.



### Security

* As mentioned before, the NDC website's major problem is the server getting down on increased load. This might happen because of intentional DDOS attack. This type of attacks are totally upto the intention of the attacker and no website optimization can prevent this. So, there is a slight chance that the server issue is not the host/developer's fault.
* The website uses ssl certificate from **Let's Encrypt** which is a free SSL certificate provider, which actually is trustworthy for a personal portfolio website but is never enough for a organization like Notre Dame College.
  It is noteworthy that the certificates are not set up properly with the new ndc.edu.bd domain. Hence, HTTPS redirection is not enabled.
* The website does use any csrf token to in its POST methods. Which makes the site pretty much vulnerable to **Cross-Site Request Forgery** attacks.
* The landing page often redirects to some random আপনি পেয়েছেন আইফোন ১২ spam page. Which refers to the website being infected with adwares.
  Note that, the site is being blocked by most of the antiviruses like Avast, Norton, Kasperski for containing links towards phishing websites.
* The site source contains the admin login address which makes the website somewhat vulnerable. The admin username is `admin`, which can expose the site to greater threats.



### Additional Notes

* For SEO purpose, the developers added a lot of unwanted blogposts having titles such as *Milk tastes sour pregnancy*, *anand telugu actor* or *karla martinez net worth*.
  There are a total 10831 of such blogs which can be found by any curious viewer and will affect the reputation of Notre Dame College.



## Suggestions

At this point, it would be daydreaming to try fixing the college website instead of creating a new one. The website is not irreparable but the amount of work which needs to be done can help a new and better website come out.

Still, we are suggesting some changes which might help increasing the website performance and security. We also have attached some guidelines that can be used in case of making a new one.



### Fixing the current website

* First thing that needs to be done, is to fix the website theme. Unnecessary links should be removed and stylesheet must be fixed.
* Every content page needs to be thoroughly checked and should not be kept blank.
* All hyperlinks are needed to be checked and should be removed instead of keeping a blank reference.
* Website host needs to be changed. We will recommend [bluehost](https://www.bluehost.com/) since the college website is built on wordpress.
* All random blogposts must be deleted.

### Making a new website

* Instead of making a **website** we will recommend to make a **webapp** which will add more functionality and robust system security management for the wesbite. We recommend to use *Django* or *NodeJS* as serverside language. 
* For webapps *AWS* or some other VPS are to be purchased to host the website.



For both cases, there are some suggestion which we highly recommend to maintain.

### Performance

* A *load balancer* is need to be set up or purchased to keep the website server running when the admission season is nearby.
* The site contents are recommended to be served using a Contend Delivery Network for faster loading time.
* SEO contents should be maintained properly and per Google's webmaster guideline instead of using cheats like adding random blogposts in sitemap.

### Security

* To protect from DDOS attack, we recommend Notre Dame College to use [CloudFlare](https://www.cloudflare.com/)'s service.
* Instead of using free SSL from let's encrypt, the college should use paid OV type SSL Certificate.
* CSRF Tokens should be used in every POST method present in the website.
* All website contents need to be scanned and phishing links must be removed.
* Site's admin page link and admin username needs to be changed. And it is to be made sure that they are not easily guessable.





# Conclusion

We are pretty much disappointed after diving deep into the website's functionality. The developers have put the least of their efforts to build this site and every page of the website keeps a mark of that. We hope that the college authority will pay heed to our suggestions and fix the website soon.



### Report prepared by

* Motasim Bhuiyan Rafeed

  Email: rafeedm.bhuiyan@gmail.com

  

* Sakirul Alam Sakir

  Email: binarysakir@gmail.com