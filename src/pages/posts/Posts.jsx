import React from 'react'
import "./Posts.css"
function Posts() {
    return (
        <>
            <div className="heroPosts">
                <div className="container">
                    <div className="HeroPostsBox1">
                        <img src="https://s3-alpha-sig.figma.com/img/6404/3a1e/644b6488af3f43f1ce44829b6bda5b37?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XyXj7FoI-sG23LxoCEQNp8xiyBdpbkbRBRhzTubH9WyTkpuISwYt6eNU61xYV3-2cpEX52rSlM8Q0X3Cf1OCG2~iw2IkaeHPlFnSoCXW4BzIQBfm5kNOq2Q-jUeJ~-KqaNusb0PC4oLIkmVoW9cPrmbKR0-P3gseFubI7bcnx8tKfdRqpBU85yq1j6nbTOx~pxWhp95~RsJNLktbDg0TM~UsTVatWQC8fbG5ELi3YsAv5jqMTi5m~woEF6FsfmpyeVfgXVG6Py3wz4VE8xoFoPfDVof1eXgW4VFpLbB6aOJV1lqGfh7OdCsO4KmrLujgd-iz2hurSgAeRMthPjb~pg__" alt="" />
                    </div>
                    <div className="HeroPostsBox2">
                        <h1>Hey there, I’m Andrew Jonhson <br /> and welcome to my Blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br /> viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                        <div class="socials">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PostSection">
                <div className="container">
                    <h1>
                        My Posts
                    </h1>
                    <div className="PostSectionLeft">
                        <div className="PostSectionBox">
                            <div className="PostSectionbox1">
                                <img src="https://s3-alpha-sig.figma.com/img/bec4/689f/4dcad262f91134ac8725ebf07c99c41e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k1f-MFm73ewMIYdIhT7PcF4MhTh3f9DeEwKCQlDJKP5N4vzWDDtBofQOgKUBcKKx8U0~tkP0xtcQ2rJABmpnBoDBy2wH1dlAAEV7tpo466GdNqXAlpHmDldduH4F7WKUhnwmMzjJf0oUxyaORb7ixFSyKOw7pttmVO0OhY65AK92bIm7bbNHpSTHbXqlsaTQIrlu89GFdY-QyWTN97oBKDhpzY-mxPPpJ3JyMm35zg-W~Ux10WvyJ~O~mzm0ptZ6TyDjFScKiQ03l41yczYPv0VwAUpZGg2Wl~pCpzhD7eRLilAA8y4~bGluNxuR~X9YfEqffYrm3yfrdI4gb2NIFQ__" alt="" />
                            </div>
                            <div className="PostSectionbox2">
                                <h5>Business</h5>
                                <h2>Font sizes in UI design: The <br /> complete guide to follow</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br /> blandit massa enim nec.</p>
                            </div>
                        </div>
                        <div className="PostSectionBox">
                            <div className="PostSectionbox1">
                                <img src="https://s3-alpha-sig.figma.com/img/7bf1/d15a/70bfdb040db12e0c7339e02bdde34686?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K6sBHmqgEXhZXnFc8U2ZLm0sqfEfdayb9UUVx0p636~vILmycYGmcG2cn9gZiSJkWDX2Q0Tmlgo3OQG~1YW8Q-BwPDKJjJvsIarT5Vz3M1yPUfBlWGmhBZbfIyBpLipaQfvfG0BwBug8wzlUJVasW7ru4CNBXfeVy21qtsVe9XSFPG1vXpBCx4uHKEWRAAD-Qg2TRlKcliF3lNfQBsEX-JNjggentgrI1SqKogRyrnyjotpNhLy2-5omduYyhh4xC3~9BlCvrKJDlSa3v9X-5jNaWOwSr7zVxEr0Uy1rMvM-1PTO~e5xWKNfXmYxSUYhr8a8K1aMijKAxzQum5AmHw__" alt="" />
                            </div>
                            <div className="PostSectionbox2">
                                <h5>Business</h5>
                                <h2>How to build rapport with your web <br /> design clients</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br /> blandit massa enim nec.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts