import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {PartnersList} from "../../components/Partner/partnersList";
import {useDispatch, useSelector} from "react-redux";
import smartContract from "../../contract/driveSlowSafe";
import {setPolicies} from "../../redux/actions/contract";
import {PolicyListAdmin} from "../../components/Policy/policyListAdmin";

export const Partners = observer(() => {
    const dispatch = useDispatch();
    const currentAccount = useSelector((state) => state.wallet.address);
    const admin = useSelector((state) => state.contract.admin);

    useEffect(() => {
        // smartContract.methods.getPolicyIds().call()
        //     .then((policyIds) => dispatch(setPolicies(policyIds)));
        //
    }, [currentAccount]);

    return(
        <Container>
            <Tabs isFitted>
                <TabList>
                    <Tab>All partners</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <PartnersList/>
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </Container>
    );
});