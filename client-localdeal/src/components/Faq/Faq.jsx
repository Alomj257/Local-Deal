import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function Faq() {
    return (
        <MDBContainer className="mt-5" style={{ maxWidth: "1200px" }}>
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <MDBAccordion alwaysOpen initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle="What is localdeal">
                    <strong>This is the first item's accordion body.</strong> It is shown
                    by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle="What is the yearly plan">
                    <strong>This is the second item's accordion body.</strong> It is
                    hidden by default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle="What are the benefits we get in premium">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={4} headerTitle="How do I cancel my subscription?">
                    <strong>This is the fourth item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                </MDBAccordionItem>
            </MDBAccordion>
        </MDBContainer>
    );
}
