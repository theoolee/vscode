/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { InlineVoiceChatAction, QuickVoiceChatAction, StartVoiceChatAction, StopListeningInQuickChatAction, StopListeningInChatEditorAction, StopListeningInChatViewAction, VoiceChatInChatViewAction, StopListeningAction, StopListeningAndSubmitAction, KeywordActivationContribution, InstallSpeechProviderForSynthesizeChatAction, InstallSpeechProviderForVoiceChatAction, StopListeningInTerminalChatAction, HoldToVoiceChatInChatViewAction, ReadChatResponseAloud, StopReadAloud, StopReadChatItemAloud } from 'vs/workbench/contrib/chat/electron-sandbox/actions/voiceChatActions';
import { registerAction2 } from 'vs/platform/actions/common/actions';
import { WorkbenchPhase, registerWorkbenchContribution2 } from 'vs/workbench/common/contributions';

registerAction2(StartVoiceChatAction);
registerAction2(InstallSpeechProviderForVoiceChatAction);

registerAction2(VoiceChatInChatViewAction);
registerAction2(HoldToVoiceChatInChatViewAction);
registerAction2(QuickVoiceChatAction);
registerAction2(InlineVoiceChatAction);

registerAction2(StopListeningAction);
registerAction2(StopListeningAndSubmitAction);

registerAction2(StopListeningInChatViewAction);
registerAction2(StopListeningInChatEditorAction);
registerAction2(StopListeningInQuickChatAction);
registerAction2(StopListeningInTerminalChatAction);

registerAction2(ReadChatResponseAloud);
registerAction2(StopReadChatItemAloud);
registerAction2(StopReadAloud);
registerAction2(InstallSpeechProviderForSynthesizeChatAction);

registerWorkbenchContribution2(KeywordActivationContribution.ID, KeywordActivationContribution, WorkbenchPhase.AfterRestored);
