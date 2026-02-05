import React from "react";
import { PageWrapper, Card, Title, SectionTitle, Text, List, ListItem, Email } from "./style";
import Footer from "../Footer/Footer";
import { GrSidebar } from "react-icons/gr";


export default function AccountDelete() {
    return (
        <>

            <PageWrapper>
                <Card>
                    <Title>Account Deletion Request – Rekory Mobile App</Title>


                    <SectionTitle>1. How to Request Account Deletion</SectionTitle>
                    <Text>
                        The <strong>Rekory app</strong>does not provide an in-app option for account deletion.
                        Users may request the deletion of their Rekory account and associated personal or
                        organizational data by submitting a request via email.
                    </Text>
                    <Text>To request deletion, please contact:</Text>
                    <Text>
                        📩 <Email href="mailto:support@yourcompany.com">rekory2@gmail.com</Email>
                    </Text>
                    <List>
                        <ListItem>Full Name</ListItem>
                        <ListItem>Registered Email ID / Employee ID</ListItem>
                        <ListItem>Company Name</ListItem>
                        <ListItem>User Role (Super Admin / HR / Admin / Employee)</ListItem>
                        <ListItem>Registered Mobile Number (if applicable)</ListItem>
                        <ListItem>Reason for deletion (optional)
                        </ListItem>
                    </List>

                    <SectionTitle>2. Data That Will Be Deleted</SectionTitle>
                    <List>
                        <ListItem>Upon successful verification, Rekory will delete all associated personal and account-related data, including:</ListItem>
                        <ListItem>User Profile Informations</ListItem>
                        <ListItem>Employee Records & Personal Details</ListItem>
                        <ListItem>Attendance & Activity Logs</ListItem>
                        <ListItem>Leave & Reimbursement Records</ListItem>
                        <ListItem>Payroll Details & Payslips</ListItem>
                        <ListItem>Uploaded Documents (contracts, visa documents, IDs, receipts, etc.)</ListItem>
                        <ListItem>Task, Project, and Department Assignments</ListItem>
                        <ListItem>Any other personal data stored within the Rekory system</ListItem>
                        <ListItem>Deletion applies across both web and mobile app platforms.</ListItem>
                    </List>

                    <SectionTitle>3. Data That May Be Retained</SectionTitle>
                    <Text>Certain information may be retained for legal, audit, or security purposes, including:</Text>
                    <List>
                        <ListItem>Audit & System Logs</ListItem>
                        <ListItem> Compliance & Regulatory Records</ListItem>
                        <ListItem>Fraud Prevention & Security Data</ListItem>
                        <ListItem>Fraud Prevention & Security Data</ListItem>
                    </List>

                    <Text><strong>Retention Period:</strong> Up to 90 days or longer if required by applicable laws or regulatory authorities.</Text>

                    <SectionTitle>4. Processing Time</SectionTitle>
                    <Text>Account deletion requests will be processed within:</Text>
                    <Text><strong>7–30 business days</strong> after successful identity and authorization verification.</Text>

                    <SectionTitle>5. Contact</SectionTitle>
                    <Text>
                        For further assistance, questions, or clarification regarding data privacy or account deletion, please contact:
                        <Email href="mailto:support@yourcompany.com">rekory2@gmail.com</Email>.
                    </Text>

                </Card>

            </PageWrapper>
            <Footer />
        </>
    );
}