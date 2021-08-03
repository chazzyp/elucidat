/// <reference types="cypress" />

//Given the time constraints, this is a partial end-to-end test going down the GUILTY route with a number of asserts

describe('test', () => {

it('test one', () => {

    cy.viewport('macbook-15') //Could be a number of different (simulated) devices including mobiles

//Open URL
cy.visit('https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135')

//Click on Start button
cy.get('#pa_5c9126fe3b767_p15577f075e9-button__text').click()

//Click on Kevin image
cy.get('#pa_5c9126fe3f4fb_p179d7b273e1-card__image-1').click()

//Assert heading text
cy.contains('A murder has been committed in an alleyway outside a pub.').should('exist')
cy.contains('Watch the video to find out exactly what happened.').should('exist')

cy.get('#pa_5c9126fe434ba_p15564daa856-textButton').click()

//Click Guilty
cy.get('#pa_5c9126fe47260_p15515116385-itemInner-1').click()
// Click Vote button
cy.get('#pa_5c9126fe47260_p15515116385-save_button').click()

//Assert GUILTY text
cy.contains('You think Kevin is guilty.').should('exist')

//Click Continue button
cy.get('#pa_5c9126fe47260_p1554e607d21-modal__button_holder').click()
 

//Click eyewitness magnify - In reality all 6 would be checked
cy.get('#pa_5c9126fe4b742_p1554fa6d6c6-explorer__item--button-1555dd91a14').click()
//Assert text
cy.contains('Two eye witnesses have told police that they saw Kevin walking away from the alleyway late on Saturday night. One of the witnesses says he heard shouting.').should('exist')

//Close the above
cy.get('#pa_5c9126fe4b742_p15583bfb7a0-dismiss_button-1555dd91a14').click()

//Click continue

cy.get('#pa_5c9126fe4b742_p15550a254a1-textButton').click()

//Assert text on You Decide page
cy.contains('There seems to be quite a bit of evidence suggesting that Kevin is guilty.').should('exist')

//Click Continue button
cy.get('#pa_5c9126fe4f952_p15578944323-textButton').click()

//Fingerprint (Select Can be reliable)
cy.get('#pa_5c9126fe5331b_p155cc4e94a5-imgCard--answer-3').click()

//Click Vote button
cy.get('#pa_5c9126fe5331b_p155cc4e94a5-save_button').click()

//Assert text on Our expert agrees pop-up
cy.contains('Crime fiction often portrays').should('exist')

//Click Continue button on pop-up
cy.get('#pa_5c9126fe5331b_p155cc4e96eb-dismiss_button').click()

//Click on left hand lawyer flipper
cy.get('#pa_5c9126fe57197_p15578a164ba-flip_button-front').click()

//Assert partial text on lawyer flipper
cy.contains('The Prosecution').should('exist')

//wait 1 second as the flipper is a bit quick!
cy.wait(1000)

//And flip back again
cy.get('#pa_5c9126fe57197_p15578a164ba-flip_button-back').click()


})


})