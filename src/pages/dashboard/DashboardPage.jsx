import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <StyledDiv>
            <Typography variant="h1" sx={{ marginBottom: "16px" }}>
                Pick Module
            </Typography>
            <FlexContainer>
                <SingleDiv
                    onClick={() => {
                        navigate("/management/users");
                    }}
                >
                    <Typography variant="h2">Users management</Typography>
                </SingleDiv>
                <SingleDiv
                    onClick={() => {
                        navigate("/jobs-directory");
                    }}
                >
                    <Typography variant="h2">Jobs Directory</Typography>
                </SingleDiv>
            </FlexContainer>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FlexContainer = styled.div`
    width: 656px;
    display: flex;
    justify-content: space-between;
`;

const SingleDiv = styled.div`
    width: 320px;
    height: 320px;
    background-color: ${(props) => props.theme.palette.background.paper};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
