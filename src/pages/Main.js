import React from 'react';
import styled from 'styled-components';
import {MEMBER_LIST} from "../constants/memberList";
import Bg from "../assets/images/logo.PNG";
import {LIST_0303} from "../constants/participationList";
// import {ColumnDef, getCoreRowModel, useReactTable, flexRender, Row} from "@tanstack/react-table";
// import {LIST_0303} from "../constants/participationList";
// import {COLUMN_DATA} from "../constants/columns";
// import { Fragment } from 'react';

const Main = props => {
    const FIRST = LIST_0303
    // const [members, setMembers] = useState(MEMBER_LIST)
    // const table = useReactTable({LIST_0303, COLUMN_DATA, getCoreRowModel: getCoreRowModel()})
    // const { getHeaderGroups, getRowModel } = table;
    // const isNoData = getRowModel().rows.length === 0;
    return (
        <MainWrapper>
            <TitleBox>
                TERIZZ
            </TitleBox>
            <MemberListBox>
                <Member>{MEMBER_LIST}{MEMBER_LIST}</Member>
            </MemberListBox>
            {/*<TableContainer>*/}
            {/*    {getHeaderGroups().map((headerGroup) => (*/}
            {/*        <TableHeader className="row">*/}
            {/*            {headerGroup.headers.map((header) =>*/}
            {/*                header.isPlaceholder ? null : (*/}
            {/*                    <TableCell key={header.id} width={header.column.getSize()}>*/}
            {/*                        {flexRender(header.column.columnDef.header, header.getContext())}*/}
            {/*                    </TableCell>*/}
            {/*                ),*/}
            {/*            )}*/}
            {/*        </TableHeader>*/}
            {/*    ))}*/}
            {/*    <TableBody>*/}
            {/*        {isNoData ? (*/}
            {/*            <NoDataComponent>no data</NoDataComponent>*/}
            {/*        ) : (*/}
            {/*            getRowModel().rows.map((row) => (*/}
            {/*                <Fragment key={row.id}>*/}
            {/*                    <TableRow className="row">*/}
            {/*                        {row.getVisibleCells().map((cell) => (*/}
            {/*                            <TableCell key={cell.id} width={cell.column.getSize()}>*/}
            {/*                                {flexRender(cell.column.columnDef.cell, cell.getContext())}*/}
            {/*                            </TableCell>*/}
            {/*                        ))}*/}
            {/*                    </TableRow>*/}
            {/*                </Fragment>*/}
            {/*            ))*/}
            {/*        )}*/}
            {/*    </TableBody>*/}
            {/*</TableContainer>*/}
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${Bg});
    background-size: contain;
`;

const TitleBox = styled.div`
    width: 100%;
    padding: 10px 0;
    font-size: 60px;
    font-weight: 800;
    //height: 10%;
`;

const MemberListBox = styled.div`
    display: flex;
    width: 100%;
    //height: 10%;
    font-family:'Raleway',Sans-serif; 
    font-weight:300; 
    position: relative;
    max-width:100%; 
    //height: auto; 
    padding:0 0 20px 0; 
    overflow-x: hidden; 
    overflow-y: hidden;
`;

const Member = styled.div`
    overflow: scroll;
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 60s linear infinite;

    @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
    }
`;

// const TableContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   font-size: 14px;
//
//   .row {
//     width: 100%;
//     display: flex;
//     border-bottom: 1px solid rgba(224, 224, 224, 1);
//   }
// `;
//
// const TableCell = styled.div`
//   width: 100%;
//   padding: 16px;
//   color: rgba(0, 0, 0, 0.87);
//   display: flex;
//   align-items: center;
//   word-break: break-all;
// `;
//
// const TableRow = styled.div`
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.04);
//   }
// `;
//
// const TableSubRow = styled.div`
//   width: 100%;
//   padding: 24px;
// `;
//
// const TableHeader = styled.div`
//   font-weight: 500;
// `;
//
// const TableBody = styled.div`
//   min-height: auto;
//   display: flex;
//   flex-direction: column;
// `;
//
// const NoDataComponent = styled.div`
//   width: 100%;
//   height: auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;