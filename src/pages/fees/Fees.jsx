import React from 'react';
import './fees.css';
import Footer from '../../footer/Footer';

function Fees() {
    return (
        <div>
            <div className='header'>
                <div className='header-head'>
                    <div className='header-item'>
                        <h1 className='text-primary'>Fees</h1>
                    </div>
                </div>
            </div>
            <div className='fees-container'>
                <div className='txt-ctr'>
                    <h3>FINANCIAL INFORMATION FOR FULL-TIME</h3>
                    <h3>(2022/2023 ACADEMIC SESSION)</h3>
                    <h1 className='mg-t'>RETURNING STUDENTS</h1>
                </div>
                <div>
                    <p className='mg-t pad01 pad02'>All old students are required to pay 50% of the under listed fees and 100% of all outstanding fees
                        before being admitted into the campus for the commencement of the 2021/2022 academic year.</p>
                </div>
                <div className='mg-t pad01 pad02'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>FEES/<br />DEPARTMENTS</th>
                                <th>LAW</th>
                                <th>NURSING</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tuition Fee</td>
                                <td>#600,000</td>
                                <td>#400,000</td>
                            </tr>
                            <tr>
                                <td>Accommodation Fee</td>
                                <td>#50,000</td>
                                <td>#50,000</td>
                            </tr>
                            <tr>
                                <td>Sundry Fees</td>
                                <td>#48,000</td>
                                <td>#48,000</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>#698,000</td>
                                <td>#498,000</td>
                            </tr>
                            <tr>
                                <td className='fee-tabb'>50%</td>
                                <td className='fee-tabb'>#349,000</td>
                                <td className='fee-tabb'>#249,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mg-t pad01 pad02'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>FEES/<br />DEPARTMENTS</th>
                                <th>PHILOSOPHY AND EDUCATION</th>
                                <th>OTHERS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tuition Fee</td>
                                <td>#160,000</td>
                                <td>#250,000</td>
                            </tr>
                            <tr>
                                <td>Accommodation Fee</td>
                                <td>#50,000</td>
                                <td>#50,000</td>
                            </tr>
                            <tr>
                                <td>Sundry Fees</td>
                                <td>#48,000</td>
                                <td>#48,000</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>#258,000</td>
                                <td>#348,000</td>
                            </tr>
                            <tr>
                                <td className='fee-tabb'>50%</td>
                                <td className='fee-tabb'>#129,000</td>
                                <td className='fee-tabb'>#174,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mg-t pad01 pad02'>
                    <p>Payment of the above listed fees and all outstanding fees (old debts) should be made into the
                        following bank Accounts. Students are advised to adhere strictly with the fees and Banks
                        Accounts specification.
                    </p>
                </div>
                <div className='pad01 pad02'>
                    <table className='mg-t' id="customers">
                        <tbody>
                            <tr>
                                <th colSpan='2'>TUITION FEE</th>
                            </tr>
                            <tr>
                                <td colSpan='2'>LAW AND NURSING STUDENTS ONLY</td>
                            </tr>
                            <tr>
                                <td>BANK</td>
                                <th className='fee-tab'>KEYSTONE BANK</th>
                            </tr>
                            <tr>
                                <td>ACCOUNT NUMBER</td>
                                <th className='fee-tab'>1007244666</th>
                            </tr>
                            <tr>
                                <td className='fee-tabb'>ACCOUNT NAME</td>
                                <th className='fee-tabb'>TANSIAN UNIVERSITY</th>
                            </tr>
                        </tbody>
                    </table>

                    <table className='mg-t' id="customers">
                        <tbody>
                            <tr>
                                <th colSpan='2' className='fee-tab'>PHILOSOPHY, EDUCATION & OTHER ACADEMIC PROGRAMMES</th>
                            </tr>
                            <tr>
                                <td>BANK</td>
                                <th className='fee-tab'>ZENITH BANK PLC</th>
                            </tr>
                            <tr>
                                <td>ACCOUNT NUMBER</td>
                                <th className='fee-tab'>1211869000</th>
                            </tr>
                            <tr>
                                <td className='fee-tabb'>ACCOUNT NAME</td>
                                <th className='fee-tabb'>CATHOLIC DIOCESE OF EKWULOBIA UNIVERSITY FUND</th>
                            </tr>
                        </tbody>
                    </table>

                    <table className='mg-t' id="customers">
                        <tbody>
                            <tr>
                                <th colSpan='2' className='fee-tab'>ACCOMODATION FEE - ALL STUDENTS</th>
                            </tr>
                            <tr>
                                <td>BANK</td>
                                <th className='fee-tab'>KEYSTONE BANK</th>
                            </tr>
                            <tr>
                                <td>ACCOUNT NUMBER</td>
                                <th className='fee-tab'>1007244666</th>
                            </tr>
                            <tr>
                                <td className='fee-tabb'>ACCOUNT NAME</td>
                                <th className='fee-tabb'>TANSIAN UNIVERSITY</th>
                            </tr>
                        </tbody>
                    </table>

                    <table className='mg-t' id="customers">
                        <tbody>
                            <tr>
                                <th colSpan='2' className='fee-tab'>SUNDRY FEE - ALL STUDENTS</th>
                            </tr>
                            <tr>
                                <td>BANK</td>
                                <th className='fee-tab'>KEYSTONE BANK</th>
                            </tr>
                            <tr>
                                <td>ACCOUNT NUMBER</td>
                                <th className='fee-tab'>1007244666</th>
                            </tr>
                            <tr>
                                <td className='fee-tabb'>ACCOUNT NAME</td>
                                <th className='fee-tabb'>TANSIAN UNIVERSITY MANAGEMENT ACCOUNT</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='pad01 pad02'>
                    <h1 className='mg-t'>FEES PAID INTO ANY OTHER BANK ACCOUNT NOT SPECIFIED HEREIN, IS NULL, VOID AND OF NO EFFECT</h1>
                    <p className='mg-t'>For futher information call: 08033802177</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Fees
